// ๐๐ฆ๐ช๐ญ๐ฉ๐ข ๐๐๐ญ๐ฆ๐ฑ๐ฌ ๐๐ฌ๐ฑ   ๐ธโ๐ณโ๐นโ
const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) return m.reply('*[โ๐๐๐๐โ] ๐ช๐ฏ๐ด๐ฆ๐ณ๐ต๐ฆ ๐ฆ๐ญ ๐ค๐ฐ๐ฎ๐ข๐ฏ๐ฅ๐ฐ ๐ฎ๐ข๐ด ๐ฆ๐ญ ๐ฆ๐ฏ๐ญ๐ข๐ค๐ฆ / ๐ญ๐ช๐ฏ๐ฌ ๐ฅ๐ฆ ๐ง๐ช๐ฅ๐ฆ๐ฐ ๐ฅ๐ฆ ๐บ๐ฐ๐ถ๐ต๐ถ๐ฃ๐ฆ*')
let chat = global.db.data.chats[m.chat]
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
conn.sendFile(m.chat, dl_link, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })}              
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['general']
handler.command = /^yt(a|mp3)$/i
module.exports = handler
