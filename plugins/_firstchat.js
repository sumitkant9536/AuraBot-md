let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (m.chat.endsWith('broadcast') || m.fromMe || isBlocked || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    let text = `
Hai ${await this.getName(m.sender)}, ${ucapan()}
Saya adalah ${namabot}, salah satu bot whatsapp multi device ada yang bisa saya bantu? 
Sebelum menggunakan bot, baca rules bot terlebih dahulu dengan mengetik *#peraturan* atau *#rules*.
Mau chat sama simi(bot)? ketik *#on simi*
`.trim()
    const message = {
        image: { url: 'http://telegra.ph/file/29f2d451412ae151a2dfb.jpg'},
        jpegThumbnail: await(await fetch('http://telegra.ph/file/29f2d451412ae151a2dfb.jpg')).buffer(),
        caption: teks,
        footer: wm,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Grup AuraBot',
                    url: 'https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Menu',
                    id: '.menu'
                }
            }
        ]
    }

module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "jangan lupa tidur yaah, lop yu<3"
  if (time >= 4) {
    res = "Selamat Pagi ☀"
  }
  if (time > 10) {
    res = "Selamat Siang 🌞"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌝"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌚"
  }
  return res
}
