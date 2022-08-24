const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
} catch (e) {
} finally {
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let menu = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${taguser} :D*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _a_
┣ ඬ⃟💫 _${usedPrefix}infohost_
┣ ඬ⃟💫 _${usedPrefix}cat_
┣ ඬ⃟💫 _${usedPrefix}dog_
┣ ඬ⃟💫 _${usedPrefix}logos_
┣ ඬ⃟💫 _${usedPrefix}runtime_
┣ ඬ⃟💫 _${usedPrefix}on welcome_
┣ ඬ⃟💫 _${usedPrefix}off welcome_
┣ ඬ⃟💫 _${usedPrefix}mediafire *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tiktok *[url]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[url]*_
┣ ඬ⃟💫 _${usedPrefix}attp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}attp2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}attp3 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp3 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp4 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ttp5 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}google *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}invocar *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp3 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp4 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tts *[lenguaje] [texto]*_
┣ ඬ⃟💫 _${usedPrefix}toimg *[sticker]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[video]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[audio]*_
┣ ඬ⃟💫 _${usedPrefix}fat *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}bass *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}blown *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}deep *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}fast *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}robot *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}slow *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}tupai *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}vibra *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}nightcore *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}earrape *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}reverse *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}smooth *[nota de voz]*_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _${usedPrefix}update_
┗━━━━━━━━━━━━━┛
`.trim()
//let mentionedJid = [who]
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑' }, type: 1 },
{ buttonId: '#runtime', buttonText: { displayText: '𝐑𝐔𝐍𝐓𝐈𝐌𝐄' }, type: 1 },
{ buttonId: '#infohost', buttonText: { displayText: '𝐈𝐍𝐅𝐎𝐇𝐎𝐒𝐓' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./Menu2.jpg'),
caption: menu.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐀𝐜𝐢𝐝𝐢𝐜𝐍𝐨𝐝𝐞𝐬 𝐇𝐨𝐬𝐭 👑',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://chat.whatsapp.com/F0fU7LSlBBcBm6ny5fVSuT`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
