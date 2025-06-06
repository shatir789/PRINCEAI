import { promises, readFileSync } from "fs";
import { join } from "path";
import { xpRange } from "../lib/levelling.js";
import moment from "moment-timezone";
import os from "os";
import fetch from "node-fetch";

const defaultMenu = {
  before: `
✨🌟 *WELCOME TO ${botname}* 🌟✨
╭━━━⊱ 💫 *USER* 💫 ⊱━━━
🖋️ *NAME:* _%name_
╰━━━━━━━━━━━━━━

╭━━━⊱ ⚙️ *INFO* ⚙️ ⊱━━━
🛡️ *MODE:* _%mode_
📱 *PLATFORM:* _%platform_
💻 *TYPE:* _NODEJS_
🔑 *PREFIX:* [ *%_p* ]
⏳ *UPTIME:* _%muptime_
💾 *DATABASE:* _%totalreg_
╰━━━━━━━━━━━━━━

📢 *%ucpn*

╭━━━⊱ 🔧 *COMMANDS* 🔧 ⊱━━━
│ 🔢 _*%totalfeatures* COMMANDS_
╰━━━━━━━━━━━━━━━━━━
%readmore
`.trimStart(),
  header: "╭━━━⊱ *`📳%CATEGORY📳`* ⊱━━━",
  body: "│💫 _*%CMD*_ %isPremium %islimit ",
  footer: "╰━━━━━━━━━━━━━━━━━",
  after: "\n%me",
};

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  await conn.sendMessage(m.chat, {
    react: {
      text: "✅",
      key: m.key,
    }
  });

  let tags = {};

  try {
    /* Info Menu */
    let glb = global.db.data.users;
    let usrs = glb[m.sender];
    let tag = `@${m.sender.split("@")[0]}`;
    let mode = global.opts["self"] ? "PRIVATE" : "PUBLIC";
    let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {};
    let { age, exp, limit, level, role, registered, credit } = glb[m.sender];
    let { min, xp, max } = xpRange(level, global.multiplier);
    let name = await conn.getName(m.sender);
    let premium = glb[m.sender].premiumTime;
    let prems = `${premium > 0 ? "PREMIUM" : "FREE"}`;
    let platform = os.platform();

    let ucpn = `${ucapan()}`;

    let _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) {
      process.send("uptime");
      _muptime = await new Promise(resolve => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      }) * 1000;
    }
    let muptime = clockString(_muptime);
    let uptime = clockString(_uptime);

    let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    let totalreg = Object.keys(glb).length;
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: "customPrefix" in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      };
    });
    for (let plugin of help)
      if (plugin && "tags" in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag;

    conn.menu = conn.menu ? conn.menu : {};
    let before = conn.menu.before || defaultMenu.before;
    let header = conn.menu.header || defaultMenu.header;
    let body = conn.menu.body || defaultMenu.body;
    let footer = conn.menu.footer || defaultMenu.footer;
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? "" : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after;
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%CATEGORY/g, tag.toUpperCase()) + "\n" + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%CMD/g, menu.prefix ? `*${help}*` : `%_p${help}`)
                .replace(/%islimit/g, menu.limit ? "🅻" : "")
                .replace(/%isPremium/g, menu.premium ? "🅿" : "")
                .trim();
            }).join("\n");
          }),
          footer
        ].join("\n");
      }),
      after
    ].join("\n");
    let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : "";
    let replace = {
      "%": "%",
      p: _p,
      uptime,
      muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : "[UNKNOWN GITHUB URL]",
      tag,
      ucpn,
      platform,
      mode,
      _p,
      credit,
      age,
      tag,
      name,
      prems,
      level,
      limit,
      name,
      totalreg,
      totalfeatures,
      role,
      readmore: readMore
    };
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name]);
    const pp = (thumb);

    let contact = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

    // Pick a random image from global.princeImg
    let selectedImage = pickRandom(global.princeImg);

    // Send the random image as an image message
    conn.sendMessage(m.chat, {
      image: selectedImage, 
      caption: text.trim(),
    }, { quoted: m });

  } catch (e) {
    await conn.reply(m.chat, "❌ ERROR OCCURRED ❌", m);
    throw e;
  }
};

handler.command = /^(menu2|h2|hh|help2)$/i;

export default handler;

// Function to pick a random item from an array
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, "h", m, "m", s, "s"].map(v => v.toString().padStart(2, '0')).join(" ");
}

function ucapan() {
  const time = moment.tz("Asia/Karachi").format("HH");
  let res = "🌞 GOOD MORNING 🌞";
  if (time >= 4) {
    res = "☀️ GOOD MORNING ☀️";
  }
  if (time >= 10) {
    res = "🌞 GOOD AFTERNOON 🌞";
  }
  if (time >= 15) {
    res = "🌇 GOOD EVENING 🌇";
  }
  if (time >= 18) {
    res = "🌙 GOOD NIGHT 🌙😴";
  }
  return res;
}
