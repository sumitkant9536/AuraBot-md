let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa yang *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* *${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['how <teks>?']
handler.tags = ['kerang']
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
