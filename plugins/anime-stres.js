let { wangy, nenen, simp, sherk } = require('../lib/stres')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix + command} keqing`
  switch(command) {
   case 'wangy': 
   m.reply(await wangy(text))
   break
   case 'wangy2': 
   m.reply(await wangy(text))
   break
   case 'nenen':
   m.reply(await nenen(text))
   break
   case 'simp':
   m.reply(await simp(text))
   break
   case 'sherk':
   m.reply(await sherk(text))
   break
}
}
handler.help = ['wangy', 'wangy2', 'nenen', 'simp', 'sherk']
handler.tags = ['anime']

handler.command = /^(wangy|wangy2|nenen|simp|sherk)$/i

module.exports = handler
