let { mediafiredl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] π°ππππππ ππ ππππππ ππππππ ππ π΄π¬π«π°π¨π­π°πΉπ¬, π¬π±π¬π΄π·π³πΆ: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/sAPITO-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
m.reply(global.wait)
conn.sendMessage(m.chat, { document: { url: url }, mimetype: ext, fileName: filename}, {quoted: m})   
} catch (e) {
m.reply('*[βππππβ] π΄πππΎπ*\n\n*- π²πΎπππΎπ±πΎππ΄ πππ΄ π΄π» π΄π½π»π°π²π΄ ππ΄π° ππΈπΌπΈπ»π°π π°:*\n*β https://www.mediafire.com/file/pbabuzyc7i8ord5/sapitoc-Bot-MD-master_%25285%2529.zip/file*')
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
module.exports = handler
