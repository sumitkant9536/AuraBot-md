import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let teks = `
┌─「 Donasi 」
├ GoPay: 6281393227036
├ Dana: 6281393227036
├ Pulsa (Telkom): 6281393227036
└────`.trim()
    const message = {
        image: { url: image},
        jpegThumbnail: await(await fetch(image)).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Saweria',
                    url: 'Gak ada' 
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }
        ]
    }
    return await conn.sendMessage(m.chat, message, { quoted: m })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
