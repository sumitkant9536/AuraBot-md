let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/VideFrelan/words/main/ptl.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'asupan.mp4', 'Nih kak asupan nya!!', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
}

handler.help = ['asupan']
handler.tags = ['nsfw']
handler.command = /^(asupan)$/i
handler.limit = 2





module.exports = handler
