let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkomsel [081393227036]
│ • Dana  [081393227036]
│ • Qris  [Chat owner]
╰────
╭─「 *OWNER* 」
│ > Ingin donasi? Wa.me/6281393227036
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
