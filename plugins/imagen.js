let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[β] πΌπππππ π ππ π‘ππ₯π‘π ππ’π ππ’πππ ππ’π πππ*')
let results = await gis(text) || []
let { url, width, height } = pickRandom(results) || {}
if (!url) return m.reply('*[β] ππππ£ππππ πππππ*')
conn.sendFile(m.chat, url, 'gimage', `
π *π΄ππ’π π‘πππππ  ππ πππ π’ππ‘πππ ππ* ${text}
π *π΅π’π πππππ:* πΊπππππ
`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
