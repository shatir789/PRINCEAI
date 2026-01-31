import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { smsg } from './lib/simple.js';
import { format } from 'util';
import { fileURLToPath } from 'url';
import path, { join } from 'path';
import { unwatchFile, watchFile } from 'fs';
import fs from 'fs';
import chalk from 'chalk';
import ws from 'ws';
import fetch from 'node-fetch';
import Pino from 'pino';
import './plugins/_prince.js';

/**
 * @type {import('@adiwajshing/baileys')}
 */
const baileys = await import('@whiskeysockets/baileys');
const { proto, jidNormalizedUser, areJidsSameUser } = baileys;

const isNumber = (x) => typeof x === 'number' && !isNaN(x);
const delay = (ms) =>
  isNumber(ms) &&
  new Promise((resolve) =>
    setTimeout(function () {
      clearTimeout(this);
      resolve();
    }, ms)
  );

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
 */
export async function handler(chatUpdate) {
  this.msgqueque = this.msgqueque || [];
  this.uptime = this.uptime || Date.now();
  if (!chatUpdate) return;
  if (!chatUpdate.messages) return;
  this.pushMessage(chatUpdate.messages).catch(console.error);

  let m = chatUpdate.messages[chatUpdate.messages.length - 1];
  if (!m) return;

  if (global.db.data == null) await global.loadDatabase();

  try {
    m = smsg(this, m) || m;
    if (!m) return;
    m.exp = 0;
    m.limit = false;    m.money = false;

    try {
      // Initialize user data
      let user = global.db.data.users[m.sender];
      if (typeof user !== 'object') global.db.data.users[m.sender] = {};
      if (user) {
        if (!isNumber(user.exp)) user.exp = 0;
        if (!isNumber(user.coin)) user.coin = 0;
        if (!isNumber(user.diamond)) user.diamond = 20;
        if (!isNumber(user.bank)) user.bank = 0;
        if (!isNumber(user.lastclaim)) user.lastclaim = 0;
        if (!('registered' in user)) user.registered = false;
        if (!user.registered) {
          if (!('name' in user)) user.name = m.name;
          if (!isNumber(user.age)) user.age = -1;
          if (!isNumber(user.regTime)) user.regTime = -1;
        }
        if (!isNumber(user.afk)) user.afk = -1;
        if (!('afkReason' in user)) user.afkReason = '';
        if (!('banned' in user)) user.banned = false;
        if (!isNumber(user.warn)) user.warn = 0;
        if (!isNumber(user.level)) user.level = 0;
        if (!('role' in user)) user.role = 'Novato';
        if (!('autolevelup' in user)) user.autolevelup = false;
        if (!('chatbot' in user)) user.chatbot = false;
        if (!('genero' in user)) user.genero = 'Indeciso';
        if (!('language' in user)) user.language = 'en';
        if (!('prem' in user)) user.prem = false;
        if (!user.premiumTime) user.premiumTime = 0;
        if (!('namebebot' in user)) user.namebebot = '';
        if (!('isbebot' in user)) user.isbebot = false;
      } else {
        global.db.data.users[m.sender] = {
          exp: 0,
          coin: 0,
          diamond: 20,
          bank: 0,
          lastclaim: 0,
          registered: false,
          name: m.name,
          age: -1,
          regTime: -1,
          afk: -1,
          afkReason: '',
          banned: false,
          warn: 0,
          level: 0,
          role: 'Novato',
          autolevelup: false,          chatbot: false,
          genero: 'Indeciso',
          language: 'en',
          prem: false,
          premiumTime: 0,
          namebebot: '',
          isbebot: false,
        };
      }

      // Initialize chat data
      let chat = global.db.data.chats[m.chat];
      if (typeof chat !== 'object') global.db.data.chats[m.chat] = {};
      if (chat) {
        if (!('antiDelete' in chat)) chat.antiDelete = true;
        if (!('antdeletelinks' in chat)) chat.antdeletelinks = true;
        if (!('antiSticker' in chat)) chat.antiSticker = false;
        if (!('antiToxic' in chat)) chat.antiToxic = false;
        if (!('antiver' in chat)) chat.antiver = false;
        if (!('anticmds' in chat)) chat.anticmds = false;
        if (!('testf' in chat)) chat.testf = false;
        if (!('antiPorn' in chat)) chat.antiPorn = true;
        if (!('antiLink2' in chat)) chat.antiLink2 = false;
        if (!('antiTiktok' in chat)) chat.antiTiktok = false;
        if (!('antiYoutube' in chat)) chat.antiYoutube = false;
        if (!('antiTelegram' in chat)) chat.antiTelegram = false;
        if (!('antiFacebook' in chat)) chat.antiFacebook = false;
        if (!('antiInstagram' in chat)) chat.antiInstagram = false;
        if (!('antiTwitter' in chat)) chat.antiTwitter = false;
        if (!('antiDiscord' in chat)) chat.antiDiscord = false;
        if (!('antiThreads' in chat)) chat.antiThreads = false;
        if (!('antiTwitch' in chat)) chat.antiTwitch = false;
        if (!('antifake' in chat)) chat.antifake = false;
        if (!('detect' in chat)) chat.detect = false;
        if (!('autoapprove' in chat)) chat.autoapprove = false;
        if (!('getmsg' in chat)) chat.getmsg = true;
        if (!('isBanned' in chat)) chat.isBanned = false;
        if (!('nsfw' in chat)) chat.nsfw = false;
        if (!('sBye' in chat)) chat.sBye = '';
        if (!('sDemote' in chat)) chat.sDemote = '';
        if (!('simi' in chat)) chat.simi = false;
        if (!('sPromote' in chat)) chat.sPromote = '';
        if (!('sWelcome' in chat)) chat.sWelcome = '';
        if (!('useDocument' in chat)) chat.useDocument = false;
        if (!('viewOnce' in chat)) chat.viewOnce = false;
        if (!('viewStory' in chat)) chat.viewStory = false;
        if (!('antiBotClone' in chat)) chat.antiBotClone = false;
        if (!('antiBot' in chat)) chat.antiBot = false;
        if (!('modoadmin' in chat)) chat.modoadmin = false;
        if (!('welcome' in chat)) chat.welcome = false;        if (!('chatbot' in chat)) chat.chatbot = false;
        if (!('princechat' in chat)) chat.princechat = false;
        if (!isNumber(chat.expired)) chat.expired = 0;
      } else {
        global.db.data.chats[m.chat] = {
          antiDelete: true,
          antdeletelinks: false,
          antiSticker: false,
          antiToxic: false,
          antiver: true,
          antiPorn: true,
          anticmds: false,
          antiLink2: false,
          testf: false,
          antiTiktok: false,
          antiYoutube: false,
          antiTelegram: false,
          antiFacebook: false,
          antiInstagram: false,
          antiTwitter: false,
          antiDiscord: false,
          antiThreads: false,
          antiTwitch: false,
          antifake: false,
          antiBotClone: false,
          antiBot: false,
          modoadmin: false,
          detect: false,
          autoapprove: false,
          expired: 0,
          getmsg: true,
          isBanned: false,
          nsfw: false,
          sBye: '',
          sDemote: '',
          simi: false,
          sPromote: '',
          sWelcome: '',
          useDocument: false,
          viewOnce: false,
          viewStory: false,
          welcome: false,
          princechat: false,
          chatbot: false,
        };
      }

     

let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('self' in settings)) settings.self = false
    if (!('autoread' in settings)) settings.autoread = false
    if (!('alwaysonline' in settings)) settings.alwaysonline = false 
    if (!('restrict' in settings)) settings.restrict = false
    if (!('status' in settings)) settings.status = 0
    if (!('pconly' in settings)) settings.pconly = false // Respond only in private
    if (!('gconly' in settings)) settings.gconly = false // Respond only in groups
if (!('anticommand' in settings)) settings.anticommand = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('antiCall' in settings)) settings.antiCall = true
if (!('antiSpam' in settings)) settings.antiSpam = true 
if (!('modoia' in settings)) settings.modoia = false
if (!('jadibotmd' in settings)) settings.jadibotmd = false 
if (!('prefix' in settings)) settings.prefix = opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@'
 
  } else global.db.data.settings[this.user.jid] = {
self: false,
autoread: false,
autoread2: false,
restrict: false,
temporal: false,
antiPrivate: false,
antiCall: true,
antiSpam: true,
modoia: false, 
anticommand: false,
prefix: opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@',
jadibotmd: false,
}} catch (e) {
console.error(e)
}


	    
       
var settings = global.db.data.settings[this.user.jid]
let prefix
const defaultPrefix = '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@' // Default
if (settings.prefix) {
if (settings.prefix.includes(',')) {
const prefixes = settings.prefix.split(',').map((p) => p.trim())
prefix = new RegExp('^(' + prefixes.map((p) => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')')
} else if (settings.prefix === defaultPrefix) {
prefix = new RegExp('^[' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']')
} else {
prefix = new RegExp('^' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&'))
}
} else {
prefix = new RegExp('') // Allows commands without a prefix
} 




	  
const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net';
const ownerJids = global.owner
  .map(([number]) => String(number).replace(/[^0-9]/g, '') + detectwhat);
const isROwner = ownerJids.includes(m.sender);
const isOwner = isROwner || m.fromMe;
const modJids = global.mods
  .map(v => String(v).replace(/[^0-9]/g, '') + detectwhat);
const isMods = isOwner || modJids.includes(m.sender);
const isPrems = isROwner || (global.db.data.users[m.sender]?.premiumTime > 0);
    
	  
	  if (opts['queque'] && m.text && !(isMods || isPrems)) {
      let queque = this.msgqueque;
      const time = 1000 * 5;
      const previousID = queque[queque.length - 1];
      queque.push(m.id || m.key.id);
      setInterval(async function () {
        if (queque.indexOf(previousID) === -1) clearInterval(this);
        await delay(time);
      }, time);
    }

    if (
      m.id.startsWith('EVO') ||
      m.id.startsWith('Lyru-') ||
      m.id.startsWith('EvoGlobalBot-') ||
      (m.id.startsWith('BAE5') && m.id.length === 16) ||
      m.id.startsWith('B24E') ||
      (m.id.startsWith('8SCO') && m.id.length === 20) ||
      m.id.startsWith('FizzxyTheGreat-')
    ) return;

    if (process.env.MODE?.toLowerCase() === 'private' && !(isROwner || isOwner)) return;
    if (opts['nyimak']) return;
    if (!isROwner && opts['self']) return;
    if (settings.pconly && m.chat.endsWith('g.us')) return;
    if (settings.gconly && !m.chat.endsWith('g.us')) return;
    if (opts['swonly'] && m.chat !== 'status@broadcast') return;
    if (typeof m.text !== 'string') m.text = '';

    let alwaysOnlineEnv = process.env.AlwaysOnline?.toLowerCase() === 'true';
    if (alwaysOnlineEnv || settings.alwaysonline) {
      conn.sendPresenceUpdate('available', m.chat);
    } else {
      conn.sendPresenceUpdate('unavailable', m.chat);
    }

    m.exp += Math.ceil(Math.random() * 10);
    let usedPrefix;
    let _user = global.db.data?.users?.[m.sender];

    const groupMetadata = m.isGroup
      ? (global.cachedGroupMetadata
          ? await global.cachedGroupMetadata(m.chat).catch(() => null)
          : await this.groupMetadata(m.chat).catch(() => null)) || {}
      : {};
    const participants = Array.isArray(groupMetadata?.participants) ? groupMetadata.participants : [];

    const decode = (j) => this.decodeJid(j);
    const numOnly = (j) =>      String(decode(j))
        .split('@')[0]
        .replace(/[^0-9]/g, '');

    const meIdRaw = this.user?.id || this.user?.jid;
    const meLidRaw = (this.user?.lid || conn?.user?.lid || '').toString().replace(/:.*/, '') || null;
    const botNum = numOnly(meIdRaw);

    const botCandidates = [
      decode(meIdRaw),
      jidNormalizedUser(decode(meIdRaw)),
      botNum,
      meLidRaw && `${meLidRaw}@lid`,
      meLidRaw && jidNormalizedUser(`${meLidRaw}@lid`),
      meLidRaw && `${meLidRaw}@s.whatsapp.net`,
    ].filter(Boolean);

    const senderCandidates = [decode(m.sender), jidNormalizedUser(decode(m.sender)), numOnly(m.sender)];

    const participantsMap = {};
    for (const p of participants) {
      const raw = p.jid || p.id;
      const dj = decode(raw);
      const nj = jidNormalizedUser(dj);
      const no = numOnly(dj);
      participantsMap[dj] = p;
      participantsMap[nj] = p;
      participantsMap[no] = p;
    }

    const pick = (cands) => {
      for (const k of cands) if (participantsMap[k]) return participantsMap[k];
      return participants.find((p) =>
        cands.some((c) => areJidsSameUser(jidNormalizedUser(p.jid || p.id), jidNormalizedUser(decode(c))))
      ) || null;
    };

    const user = m.isGroup ? pick(senderCandidates) || {} : {};
    const bot = m.isGroup ? pick(botCandidates) || {} : {};

    const isRAdmin = user?.admin === 'superadmin';
    const isAdmin = isRAdmin || user?.admin === 'admin' || user?.admin === true;
    const isBotAdmin = bot?.admin === 'admin' || bot?.admin === 'superadmin' || bot?.admin === true;

    m.isWABusiness = global.conn.authState?.creds?.platform === 'smba' || global.conn.authState?.creds?.platform === 'smbi';
    m.isChannel = m.chat.includes('@newsletter') || m.sender.includes('@newsletter');

    const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins');
    const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    for (let name in global.plugins) {
      let plugin = global.plugins[name];
      if (!plugin) continue;
      if (plugin.disabled) continue;

      const __filename = join(___dirname, name);

      if (typeof plugin.all === 'function') {
        try {
          await plugin.all.call(this, m, {
            chatUpdate,
            __dirname: ___dirname,
            __filename,
          });
        } catch (e) {
          console.error(e);
          for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
            let data = (await conn.onWhatsApp(jid))[0] || {};
            if (data.exists)
              m.reply(
                `*📂 Plugin:* ${name}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${m.text}\n\n${format(e)}`.trim(),
                data.jid
              );
          }
        }
      }

      if (!opts['restrict'] && plugin.tags?.includes('admin')) {
        continue;
      }

      let _prefix = plugin.customPrefix ? plugin.customPrefix : prefix;

      let matchCandidates =
        _prefix instanceof RegExp
          ? [[_prefix.exec(m.text), _prefix]]
          : Array.isArray(_prefix)
          ? _prefix.map((p) => {
              let re = p instanceof RegExp ? p : new RegExp(str2Regex(p), 'i');
              return [re.exec(m.text), re];
            })
          : typeof _prefix === 'string'
          ? [[new RegExp(str2Regex(_prefix), 'i').exec(m.text), new RegExp(str2Regex(_prefix), 'i')]]
          : [[null, null]];

      let match = matchCandidates.find((p) => p[0]);

      if (typeof plugin.before === 'function') {
        if (
          await plugin.before.call(this, m, {            match,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isRAdmin,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
            __dirname: ___dirname,
            __filename,
          })
        )
          continue;
      }

      if (typeof plugin !== 'function') continue;
      if (!match) continue;

      usedPrefix = (match[0] || [])[0] || '';
      let noPrefix = m.text.slice(usedPrefix.length);
      let [command, ...args] = noPrefix.trim().split(/\s+/).filter(Boolean);
      args = args || [];
      let _args = noPrefix.trim().split(/\s+/).slice(1);
      let text = _args.join(' ');
      command = (command || '').toLowerCase();

      let fail = plugin.fail || global.dfail;
      let isAccept =
        plugin.command instanceof RegExp
          ? plugin.command.test(command)
          : Array.isArray(plugin.command)
          ? plugin.command.some((cmd) => (cmd instanceof RegExp ? cmd.test(command) : cmd === command))
          : typeof plugin.command === 'string'
          ? plugin.command === command
          : false;

      if (!isAccept) continue;
      m.plugin = name;

      if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
        let chat = global.db.data.chats[m.chat];
        let user = global.db.data.users[m.sender];
        if (name !== 'owner-unbanchat.js' && chat?.isBanned) return;
        if (global.blockNumbers?.includes(m.sender.replace(/[^0-9]/g, ''))) {
          global.db.data.users[m.sender] = global.db.data.users[m.sender] || {};          global.db.data.users[m.sender].banned = true;
        }
        if (name !== 'owner-unbanuser.js' && user?.banned) return;
      }

      let hl = _prefix;
      let adminMode = global.db.data.chats[m.chat]?.modoadmin;
      let prince = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`;
      if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && prince) return;

      if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
        fail('owner', m, this);
        continue;
      }
      if (plugin.rowner && !isROwner) {
        fail('rowner', m, this);
        continue;
      }
      if (plugin.owner && !isOwner) {
        fail('owner', m, this);
        continue;
      }
      if (plugin.mods && !isMods) {
        fail('mods', m, this);
        continue;
      }
      if (plugin.premium && !isPrems) {
        fail('premium', m, this);
        continue;
      }
      if (plugin.group && !m.isGroup) {
        fail('group', m, this);
        continue;
      } else if (plugin.botAdmin && !isBotAdmin) {
        fail('botAdmin', m, this);
        continue;
      } else if (plugin.admin && !isAdmin) {
        fail('admin', m, this);
        continue;
      }
      if (plugin.private && m.isGroup) {
        fail('private', m, this);
        continue;
      }
      if (plugin.register == true && _user?.registered == false) {
        fail('unreg', m, this);
        continue;
      }

      m.isCommand = true;      let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17;
      if (xp > 200) {
        m.reply('cheater');
      } else {
        m.exp += xp;
      }

      if (!isPrems && plugin.credit && global.db.data.users[m.sender].credit < plugin.credit * 1) {
        this.reply(m.chat, `🟥 You don't have enough gold`, m);
        continue;
      }
      if (plugin.level > _user?.level) {
        this.reply(m.chat, `🟥 Level required ${plugin.level} to use this command. \nYour level ${_user?.level}`, m);
        continue;
      }

      let extra = {
        match,
        usedPrefix,
        noPrefix,
        _args,
        args,
        command,
        text,
        conn: this,
        participants,
        groupMetadata,
        user,
        bot,
        isROwner,
        isOwner,
        isRAdmin,
        isAdmin,
        isBotAdmin,
        isPrems,
        chatUpdate,
        __dirname: ___dirname,
        __filename,
      };

      try {
        await plugin.call(this, m, extra);
        if (!isPrems) m.credit = m.credit || plugin.credit || false;
      } catch (e) {
        m.error = e;
        console.error(e);
        if (e) {
          let text = format(e);
          for (let key of Object.values(global.APIKeys || {})) text = text.replace(new RegExp(key, 'g'), '#HIDDEN#');
          if (e.name)            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
              let data = (await this.onWhatsApp(jid))[0] || {};
              if (data.exists)
                return m.reply(
                  `*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n${text}`.trim(),
                  data.jid
                );
            }
          m.reply(text);
        }
      } finally {
        if (typeof plugin.after === 'function') {
          try {
            await plugin.after.call(this, m, extra);
          } catch (e) {
            console.error(e);
          }
        }
        if (m.credit) m.reply(`You used *${+m.credit}*`);
      }
      break;
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (opts['queque'] && m.text) {
      const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id);
      if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1);
    }

    let user = global.db.data.users?.[m.sender];
    if (user) {
      user.exp += m.exp;
      if (m.credit) user.credit -= m.credit;
      if (m.bank) user.bank -= m.bank;
      if (m.chicken) user.chicken -= m.chicken;
    }

    let stats = global.db.data.stats;
    if (m.plugin && stats) {
      let now = +new Date();
      if (!(m.plugin in stats)) {
        stats[m.plugin] = {
          total: 0,
          success: 0,
          last: 0,
          lastSuccess: 0,
        };
      }
      let stat = stats[m.plugin];      stat.total += 1;
      stat.last = now;
      if (!m.error) {
        stat.success += 1;
        stat.lastSuccess = now;
      }
    }

    try {
      if (!opts['noprint']) await (await import('./lib/print.js')).default(m, this);
    } catch (e) {
      console.log(m, m.quoted, e);
    }

    let settingsREAD = global.db.data.settings[this.user.jid] || {};
    if (opts['autoread']) await this.readMessages([m.key]);
    if (settingsREAD.autoread2) await this.readMessages([m.key]);

    // STATUS VIEW & REACTIONS LOGIC (kept as-is)
    let bot = global.db.data.settings[this.user.jid] || {};
    let statusViewEnabled = process.env.STATUSVIEW?.toLowerCase() === 'true';
    let defaultEmojis = ['💚', '💛', '💓', '❤️', '💙'];
    let statusEmojis = process.env.StatusEmojies ? process.env.StatusEmojies.split(',') : defaultEmojis;
    let statusLikesEnabled = process.env.StatusLikes?.toLowerCase() === 'true';
    if ((statusViewEnabled || bot.statusview) && m.key.remoteJid === 'status@broadcast' && !m.fromMe) {
      await conn.readMessages([m.key]);
      if (bot.like || statusLikesEnabled) {
        const randomEmoji = statusEmojis[Math.floor(Math.random() * statusEmojis.length)];
        const me = await conn.decodeJid(conn.user.id);
        await conn.sendMessage(m.key.remoteJid, { react: { key: m.key, text: randomEmoji } }, { statusJidList: [m.key.participant, me] });
      }
    }

    const autoReactionSetting = process.env.AutoReaction?.toLowerCase() || null;
    const dbAutoReact = global.db.data.settings[this.user.jid]?.autoreacts;
    const isGroup = typeof m.chat === 'string' && m.chat.endsWith('@g.us');
    const isPrivate = typeof m.chat === 'string' && !isGroup;
    const shouldReact =
      (autoReactionSetting === 'true' && (isGroup || isPrivate)) ||
      (autoReactionSetting === 'group' && isGroup) ||
      (autoReactionSetting === 'private' && isPrivate) ||
      (dbAutoReact && (isGroup || isPrivate));

    if (shouldReact && m.chat) {
      const emojis = process.env.autoreactions_emojies
        ? process.env.autoreactions_emojies.split(',')
        : ['💛', '🤍', '💗', '♥️', '💞', '💖', '💓', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '💟', '🕊️', '🥀', '🦋', '🐣', '❤‍🩹', '♥️', '🌸', '❣️', '✨', '🎀', '🩷', '🖤', '🤍', '🤎', '💛', '💚', '🩵', '💙', '💜', '💟', '💓', '🩶'];

      if (m.text && m.text.match(/(prince|a|ا|م|ي|ء|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z)/gi)) {
        await this.sendMessage(m.chat, {          react: {
            text: m.sender === '923092668108@s.whatsapp.net' ? '👑' : pickRandom(emojis),
            key: m.key,
          },
        });
      }

      if (m.message?.imageMessage || m.message?.videoMessage || m.message?.audioMessage) {
        await this.sendMessage(m.chat, {
          react: {
            text: pickRandom(emojis),
            key: m.key,
          },
        });
      }
    }

    if (m.fromMe && global.db.data.settings[this.user.jid]?.ownerreacts) {
      this.sendMessage(m.chat, {
        react: {
          text: process.env.owner_react_emojie || '💛',
          key: m.key,
        },
      });
    }
  }
}

// Utility
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * Handle groups participants update
 */
export async function participantsUpdate({ id, participants, action }) {
  if (opts['self']) return;
  if (this.isInit) return;
  if (global.db.data == null) await loadDatabase();
  let chat = global.db.data.chats[id] || {};
  let text = '';
  switch (action) {
    case 'add':
    case 'remove':
      if (chat.welcome) {
        let groupMetadata = (await this.groupMetadata(id)) || {};
        for (let user of participants) {
          let pp = global.gataImg;
          try {            pp = await this.profilePictureUrl(user, 'image');
          } catch (e) {}
          let apii = await this.getFile(pp);
          const botTt2 = groupMetadata.participants?.find((u) => this.decodeJid(u.id) == this.user.jid) || {};
          const isBotAdminNn = botTt2?.admin === 'admin' || false;
          text = (
            action === 'add'
              ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!')
                  .replace('@subject', await this.getName(id))
                  .replace('@desc', groupMetadata.desc?.toString() || '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 😻')
              : chat.sBye || this.bye || conn.bye || 'Bye, @user!'
          ).replace('@user', '@' + user.split('@')[0]);

          let fkontak2 = {
            key: { participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo' },
            message: {
              contactMessage: {
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
              },
            },
            participant: '0@s.whatsapp.net',
          };
          this.sendMessage(
            id,
            {
              text: text,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [user],
                externalAdReply: {
                  showAdAttribution: true,
                  renderLargerThumbnail: true,
                  thumbnail: apii.data,
                  title: 'Prince♥️',
                  containsAutoReply: true,
                  mediaType: 1,
                  sourceUrl: 'https://github.com/DASTAGHIR/PRINCEAI',
                },
              },
            },
            { quoted: fkontak2 }
          );
        }
      }
      break;
    case 'promote':
    case 'daradmin':
    case 'darpoder':
      text = chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```';    case 'demote':
    case 'quitarpoder':
    case 'quitaradmin':
      if (!text) text = chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```';
      text = text.replace('@user', '@' + participants[0].split('@')[0]);
      if (chat.detect) {
        // this.sendMessage(id, { text, mentions: this.parseMention(text) })
      }
      break;
  }
}

/**
 * Handle groups update
 */
export async function groupsUpdate(groupsUpdate) {
  if (opts['self'] && !global.owner.map(([n]) => n + '@s.whatsapp.net').includes(this.user.jid)) return;
  for (const groupUpdate of groupsUpdate) {
    const id = groupUpdate.id;
    if (!id) continue;
    let chats = global.db.data?.chats?.[id],
      text = '';
    if (!chats?.detect) continue;
    if (!text) continue;
    await this.sendMessage(id, { text, mentions: this.parseMention(text) });
  }
}

/**
 * Delete Update
 */
export async function deleteUpdate(message) {
  try {
    const antidelete = process.env.antidelete?.toLowerCase();
    if (!antidelete || antidelete === 'false') return;
    const { fromMe, id, participant } = message;
    if (fromMe) return;
    const isGroup = typeof message.chat === 'string' && message.chat.endsWith('@g.us');
    if (!['all', 'private', 'groups'].includes(antidelete)) return;
    if (antidelete === 'private' && isGroup) return;
    if (antidelete === 'groups' && !isGroup) return;
    let msg = this.serializeM(this.loadMessage(id));
    if (!msg) return;
    const deleteTime = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Karachi',
    });
    await this.reply(
      conn.user.id,      `🚨 *Message Deleted Alert!* 🚨\n📲 *Number:* @${participant.split('@')[0]}\n⏰ *Deleted At:* ${deleteTime}\n✋ *Deleted Below:* 👇`.trim(),
      msg,
      { mentions: [participant] }
    );
    this.copyNForward(conn.user.id, msg, false).catch((e) => console.log(e, msg));
  } catch (e) {
    console.error(e);
  }
}

/**
 * Poll Update
 */
export async function pollUpdate(message) {
  for (const { key } of message) {
    if (message.pollUpdates) {
      const pollCreation = await this.serializeM(this.loadMessage(key.id));
      if (pollCreation) {
        // Note: getAggregateVotesInPollMessage must be defined elsewhere
        // const pollMessage = await getAggregateVotesInPollMessage({ message: pollCreation.message, pollUpdates: pollCreation.pollUpdates });
        // message.pollUpdates[0].vote = pollMessage;
        // await console.log(pollMessage);
        // this.appenTextMessage(message, message.pollUpdates[0].vote || pollMessage.filter((v) => v.voters.length !== 0)[0]?.name, message.message);
      }
    }
  }
}

/**
 * Presence Update
 */
export async function presenceUpdate(presenceUpdate) {
  const id = presenceUpdate.id;
  const nouser = Object.keys(presenceUpdate.presences);
  const status = presenceUpdate.presences[nouser]?.lastKnownPresence;
  const user = global.db.data.users[nouser[0]];
  if (user?.afk && status === 'composing' && user.afk > -1) {
    if (user.banned) {
      user.afk = -1;
      user.afkReason = 'User Banned Afk';
      return;
    }
    const username = nouser[0].split('@')[0];
    const caption = `\n@${username} has stopped being AFK and is currently typing.\n\nReason: ${user.afkReason || 'No Reason'}\n`;
    this.reply(id, caption, null, { mentions: this.parseMention(caption) });
    user.afk = -1;
    user.afkReason = '';
  }
}
/**
 * dfail
 */
global.dfail = (type, m, conn) => {
  let msg = {
    rowner: `👑 ${mssg.rownerH}`,
    owner: `😎 ${mssg.ownerH}`,
    mods: `🔰 ${mssg.modsH}`,
    premium: `💠 ${mssg.premH}`,
    group: `⚙️ ${mssg.groupH}`,
    private: `📮 ${mssg.privateH}`,
    admin: `🛡️ ${mssg.adminH}`,
    botAdmin: `💥 ${mssg.botAdmin}`,
    unreg: `📇 ${mssg.unregH}`,
    restrict: '🔐 This feature is *disabled*',
  }[type];
  if (!msg) return;
  let tg = { quoted: m, userJid: conn.user.jid };
  let prep = generateWAMessageFromContent(
    m.chat,
    {
      extendedTextMessage: {
        text: msg,
        contextInfo: {
          externalAdReply: {
            title: 'DASTAGEER',
            body: [wm, '🌻 𝗦𝘂𝗽𝗲𝗿 ', 'GDS❤️', '❤️'].getRandom(),
            thumbnail: imagen1,
            sourceUrl: 'https://github.com/DASTAGHIR/PRINCEAI',
          },
        },
      },
    },
    tg
  );
  return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id });
};

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'handler.js'"));
});
