let fetch = require('node-fetch')
let handler = async (m, {command, conn, text, args, usedPrefix}) => {
if (!text) throw `*[βππππβ] ππππππ ππ π»πππ»ππ ππππ‘πππ‘π, πππ πππ£ππ ππππππ π ππ ππππππ/ππππ ππ ππππ’π π£ππππ ππ π»πππ»ππ*\n\n*ββ πππππππ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vS/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[βππππβ] πΈπππππ ππ π»πππ»ππ πππππππππ‘π, πππ πππ£ππ ππππππ π ππ ππππππ/ππππ ππ ππππ’π π£ππππ ππ π»πππ»ππ*\n\n*ββ πΈπ±πΈπ΄πππΆ:*\n*${usedPrefix + command} https://vm.tiktok.com/Z42vSnn/*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[βππππβ] πΈππππ π΄πΏ π·πΈππΆπ΄ππΊπ΄π ππ ππΌπ·πΈπ πΌπππΈπππΈ πΈπΏ πππππΌππ π΄πΜπ*'
let meta = await getInfo(url).catch(_ => {})
await m.reply(global.wait)
conn.sendFile(m.chat, data[data.length - 1], 'tiktok.mp4', `${await shortUrl(data[data.length - 1])}`, m)}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['general']
handler.command = /^(tiktok)$/i
module.exports = handler
async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
