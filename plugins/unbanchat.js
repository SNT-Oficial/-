let handler = async (m, { isOwner, text, isAdmin }) => {
let who
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
} else {
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
}
try {
if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = false
else global.db.data.users[who].banned = false
m.reply(`*[âððððâ] ðŠððð ððððððð ððððð ðð ððððððð ðnĖð*`)
} catch (e) {
throw `*[âððððâ] ðððð ðððð ðð ðððð ðð ðð ðððð ðð ððððð*`
}}
handler.help = ['unban']
handler.tags = ['owner', 'group']
handler.command = /^unban(chat)?$/i
module.exports = handler
