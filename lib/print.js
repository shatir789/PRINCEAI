import { WAMessageStubType } from '@whiskeysockets/baileys';
import PhoneNumber from 'awesome-phonenumber';
import chalk from 'chalk';
import { watchFile } from 'fs';
import '../config.js';

const terminalImage = global.opts['img'] ? require('terminal-image') : '';
const urlRegex = (await import('url-regex-safe')).default({ strict: false });

export default async function (m, conn = { user: {} }) {
  try {
    let _name = (await conn.getName(m.sender)) || 'Anonymous';
    let sender =
      PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') === undefined
        ? ''
        : PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') +
          (_name ===
          PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')
            ? ''
            : ' ~' + _name);
    let chat = await conn.getName(m.chat);

    // Image handling
    let img;
    try {
      if (global.opts['img']) img = /sticker|image/gi.test(m.mtype) ? await terminalImage.buffer(await m.download()) : false;
    } catch (e) {
      console.error(e);
    }

    let filesize =
      (m.msg
        ? m.msg.vcard
          ? m.msg.vcard.length
          : m.msg.fileLength
          ? m.msg.fileLength.low || m.msg.fileLength
          : m.msg.axolotlSenderKeyDistributionMessage
          ? m.msg.axolotlSenderKeyDistributionMessage.length
          : m.text
          ? m.text.length
          : 0
        : m.text
        ? m.text.length
        : 0) || 0;

    let user = global.db.data.users[m.sender];
    let me = PhoneNumber('+' + (conn.user?.jid).replace('@s.whatsapp.net', '')).getNumber('international');

    // Message stub participants formatted
    let name_user = (m.messageStubParameters || [])
      .map((jid) => {
        let name_info = conn.getName(jid);
        return chalk.bold(name_info || 'Someone');
      })
      .join(', ');

    // Console log design
    // --- Console Log Design with Emojis & Lines ---
console.log(`
╭━━━──•✧✧•──━━━╮
💻 ${chalk.hex('#FE0041').bold('PRINCE MD [BOT SYSTEM]')}
⏰ Date & Time: ${chalk.green(
  (m.messageTimestamp ? new Date(1000 * (m.messageTimestamp.low || m.messageTimestamp)) : new Date()).toLocaleString('en-GB', {
    timeZone: 'Asia/Karachi',
    hour12: false,
  })
)}
📂 Chat: ${chalk.blueBright(m.chat.includes('@g.us') ? `${m.chat} ~${chat}` : m.chat.includes('@s.whatsapp.net') ? `${m.sender} ~${_name}` : m.chat)}
📦 File Size: ${chalk.magenta(`${filesize}B`)}
👤 Sender: ${chalk.redBright(sender)}
💬 Message Type: ${chalk.yellow(await formatMessageTypes(m.mtype))}
╰━━━──•✧✧•──━━━╯
`.trim());
   

    if (img) console.log(img.trimEnd());

    // Handle text messages
    if (typeof m.text === 'string' && m.text) {
      let log = m.text.replace(/\u200e+/g, '');
      const mdRegex =
        /(?<=(?:^|[\s\n])\S?)(?:([*_~`])(?!`)(.+?)\1|```((?:.|[\n\r])+?)```|`([^`]+?)`)(?=\S?(?:[\s\n]|$))/g;
      const mdFormat = (depth = 4) => (_, type, text, monospace) => {
        const types = {
          _: 'italic',
          '*': 'bold',
          '~': 'strikethrough',
          '`': 'bgGray',
        };
        text = text || monospace;
        const formatted =
          !types[type] || depth < 1
            ? text
            : chalk[types[type]](text.replace(/`/g, '').replace(mdRegex, mdFormat(depth - 1)));
        return formatted;
      };

      log = log.replace(mdRegex, mdFormat(4));
      log = log
        .split('\n')
        .map((line) => {
          if (line.trim().startsWith('>')) return chalk.bgGray.dim(line.replace(/^>/, '┃'));
          if (/^([1-9]|[1-9][0-9])\./.test(line.trim()))
            return line.replace(/^(\d+)\./, (match, number) => (number.length === 1 ? '  ' + number + '.' : ' ' + number + '.'));
          if (/^[-*]\s/.test(line.trim())) return line.replace(/^[*-]/, '  •');
          return line;
        })
        .join('\n');

      log = log.replace(urlRegex, (url) => chalk.blueBright(url));

      if (m.mentionedJid)
        for (let u of m.mentionedJid) log = log.replace('@' + u.split`@`[0], chalk.blueBright('@' + (await conn.getName(u))));

      console.log(m.error != null ? chalk.red(log) : m.isCommand ? chalk.yellow(log) : log);
    }

    // Handle message stub parameters
    if (m.messageStubParameters)
      console.log(
        m.messageStubParameters
          .map((jid) => {
            jid = conn.decodeJid(jid);
            let name = conn.getName(jid);
            const phoneNumber = PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
            return name ? chalk.gray(`${phoneNumber} (${name})`) : '';
          })
          .filter(Boolean)
          .join(', ')
      );

    // Handle media
    if (/document/i.test(m.mtype)) console.log(`🗂️ ${m.msg.fileName || m.msg.displayName || 'Document'}`);
    else if (/ContactsArray/i.test(m.mtype)) console.log(`👨‍👩‍👧‍👦`);
    else if (/contact/i.test(m.mtype)) console.log(`👤 ${m.msg.displayName || ''}`);
    else if (/audio/i.test(m.mtype)) {
      const duration = m.msg.seconds || 0;
      console.log(`${m.msg.ptt ? '🎤 PTT ' : '🎵 Audio '} ${Math.floor(duration / 60).toString().padStart(2, 0)}:${(duration % 60).toString().padStart(2, 0)}`);
    }
  } catch (err) {
    console.error('❌ An error occurred:', err.message || err);
  }

  console.log();

  // Watch for updates
  let file = global.__filename(import.meta.url);
  watchFile(file, () => console.log(chalk.redBright("📝 Update 'lib/print.js' detected. Reloading...")));
};

// --- Helpers ---
async function formatMessageStubType(messageStubType, name_user) {
  const mapping = {
    0: 'Unknown',
    1: 'Revoked',
    2: 'Encrypted Text',
    20: 'Group Created',
    21: 'Group Name Changed',
    22: 'Group Picture Changed',
    23: 'New Group Link',
    24: 'Group Description Updated',
    25: 'Group Restriction Changed',
    26: 'Group Messaging Setting Updated',
    27: `${name_user} Joined the Group`,
    28: `${name_user} Removed from Group`,
    29: `${name_user} is New Admin`,
    30: `${name_user} No Longer Admin`,
    31: `${name_user} Invited to Group`,
    32: `${name_user} Left the Group`,
    145: '"Approve New Members" Enabled',
    171: '"Add Other Members" Enabled',
  };
  return mapping[messageStubType] || messageStubType;
}

async function formatMessageTypes(messageType) {
  const mapping = {
    conversation: 'Conversation',
    imageMessage: 'Image',
    contactMessage: 'Contact',
    locationMessage: 'Location',
    extendedTextMessage: 'Text',
    documentMessage: 'Document',
    audioMessage: 'Audio',
    videoMessage: 'Video',
    call: 'Call',
    chat: 'Chat',
    protocolMessage: 'Encrypted',
    contactsArrayMessage: 'Contacts List',
    highlyStructuredMessage: 'Structured',
    fastRatchetKeySenderKeyDistributionMessage: 'Key Distribution',
    sendPaymentMessage: 'Payment Message',
    liveLocationMessage: 'Live Location',
    requestPaymentMessage: 'Request Payment',
    declinePaymentRequestMessage: 'Decline Payment',
    cancelPaymentRequestMessage: 'Cancel Payment',
    templateMessage: 'Template Message',
    stickerMessage: 'Sticker',
    groupInviteMessage: 'Group Invite',
    templateButtonReplyMessage: 'Template Button Reply',
    productMessage: 'Product',
    deviceSentMessage: 'Device Sent Message',
    messageContextInfo: 'Message Context',
    listMessage: 'List',
    viewOnceMessage: 'View Once',
    orderMessage: 'Order',
  };
  return mapping[messageType] || messageType || 'Not Specified';
}
