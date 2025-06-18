import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw 'Please reply to a video or audio file.'
    await conn.sendPresenceUpdate('recording', m.chat)
    let media = await q.download?.()
    if (!media && !/video/.test(mime)) throw 'Failed to download the video file.'
    if (!media && !/audio/.test(mime)) throw 'Failed to download the audio file.'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data && !/audio/.test(mime)) throw 'Failed to convert the audio file.'
    if (!audio.data && !/video/.test(mime)) throw 'Failed to convert the video file.'
    conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = /^(tomp3|toaudio)$/i
// ['tomp3', 'toaudio', 'mmp3']   
export default handler
