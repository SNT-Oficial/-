// ππ¦πͺπ­π©π’ πππ­π¦π±π¬ ππ¬π±   πΈβπ³βπΉβ
let yts = require('yt-search')
let handler = async (m, { text }) => {
if (!text) return m.reply('Cari apa?')
let results = await yts(text)
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
π *${v.title}* (${v.url})
β ππππππππ: ${v.timestamp}
β²οΈ πππππππππ ${v.ago}
`.trim()
case 'channel': return `
π *${v.name}* (${v.url})
π§βπ€βπ§ _${v.subCountLabel} ππππππππππππ_
π₯ ${v.videoCount} πππππ/π
`.trim()
}
}).filter(v => v).join('\n========================\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^yts(earch)?$/i
module.exports = handler
