let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama yang akan diartikan', m)

  await m.reply('Searching...')
	axios.get(`https://rest-beni.herokuapp.com/api/artimimpi?mimpi=${text}`).then ((res) => {
	 	let hasil = `Arti Mimpi mu Adalah\n\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artimimpi'].map(v => v + ' <mimpi>')
handler.tags = ['fun']
handler.command = /^(artinama)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
