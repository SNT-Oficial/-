// πΎπππππ πΎπππππ π­ππ   πΈβπ³βπΉβ
let axios = require("axios")
let fetch = require("node-fetch")
let cheerio = require("cheerio")
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βοΈππππβοΈ] πππππππ ππ π‘ππ  π’π ππππ πππ ππ πππππππ!!*\n*πππ ππππππππ:*\n*${usedPrefix + command} πΏππππππ πππππ π ππππππ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Estrellas*`
wikipedia(`${text}`).then(res => {
m.reply(`*π°πππΈ ππΈπ΄π½π΄π π»π° πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ π΄π½π²πΎπ½πππ°π³π° π³π΄ ${text}*\n\n` + res.result.isi)
}).catch(() => { m.reply('*[βοΈππππβοΈ] π΅π ππππππππ πππππππππππ*') })}
handler.command = /^(wiki|wikipedia|internet?)$/i
module.exports = handler
