import { areJidsSameUser } from '@whiskeysockets/baileys'
import fs from 'fs'
import path from 'path'

const globalContentFile = path.join(process.cwd(), './database/globalContent.json')
const localContentFile = path.join(process.cwd(), './database/localContent.json')

function loadJSON(file) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'))
    }
  } catch (e) {
    console.error(`JSON load error (${file}):`, e)
  }
  return {}
}

export async function all(m) {
  try {
    if (m.isBaileys) return
    if (m._handled) return
    m._handled = true

    global.db.data ||= {}
    global.db.data.sticker ||= {}

    const localContent = loadJSON(localContentFile)
    const globalContent = loadJSON(globalContentFile)
    const chatData = localContent[m.chat]?.savedContent || {}

    /* ───────────── TEXT / KEYWORD AUTO REPLY ───────────── */
    if (
      m.text &&
      !m.isCommand &&
      m.mtype !== 'protocolMessage' &&
      !m.text.startsWith('.') &&
      !m.msg?.fileSha256
    ) {
      const textLower = m.text.toLowerCase().trim()
      let content = null

      const search = (data) => {
        for (const value of Object.values(data)) {
          if (value?.keywords?.some(k => textLower.includes(k))) {
            return value
          }
        }
        return null
      }

      content = search(chatData) || search(globalContent)
      if (!content || !content.type) return

      const options = { quoted: m }

      switch (content.type) {
        case 'text':
          await m.reply(content.value, options)
          return

        case 'image':
        case 'video':
        case 'gif':
        case 'audio':
        case 'document': {
          const buffer = Buffer.from(content.data, 'base64')
          const msg = {
            [content.type === 'gif' ? 'video' : content.type]: buffer,
            caption: content.caption || '',
            ...(content.type === 'gif' && { gifPlayback: true }),
            ...(content.type === 'audio' && { ptt: false }),
            ...(content.type === 'document' && {
              mimetype: content.mimetype,
              fileName: content.fileName
            })
          }
          await this.sendMessage(m.chat, msg, options)
          return
        }

        case 'sticker': {
          const buffer = Buffer.from(content.data, 'base64')
          await this.sendFile(m.chat, buffer, 'sticker.webp', '', m, false)
          return
        }

        case 'location':
          await this.sendMessage(
            m.chat,
            {
              location: {
                degreesLatitude: content.latitude,
                degreesLongitude: content.longitude,
                name: content.caption || ''
              }
            },
            options
          )
          return

        case 'contact':
          await this.sendMessage(
            m.chat,
            {
              contacts: {
                contacts: [
                  {
                    vcard: content.vcard,
                    displayName: content.caption || ''
                  }
                ]
              }
            },
            options
          )
          return

        case 'buttons':
          await this.sendMessage(
            m.chat,
            {
              text: content.text || '',
              buttons: content.buttons.map(b => ({
                buttonId: b.buttonId,
                buttonText: { displayText: b.buttonText },
                type: 1
              })),
              headerType: 1
            },
            options
          )
          return

        case 'link':
          await m.reply(
            `${content.caption ? content.caption + '\n\n' : ''}${content.url}`,
            options
          )
          return
      }
    }

    /* ───────────── STICKER HASH REPLY (SAFE) ───────────── */
    if (m.msg?.fileSha256) {
      const hash = Buffer.from(m.msg.fileSha256).toString('base64')
      const data = global.db.data.sticker[hash]
      if (!data) return

      if (data.chat && data.chat !== m.chat) return

      await this.sendMessage(
        m.chat,
        {
          text: data.text || '',
          mentions: data.mentionedJid || []
        },
        { quoted: m }
      )
      return
    }
  } catch (e) {
    console.error('ALL HANDLER ERROR:', e)
  }
}
