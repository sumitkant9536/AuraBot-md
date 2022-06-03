let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/milf'), 'Nih', wm, 'NEXT', '.milf', m)
    if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.url)
    conn.sendFile(
      m.chat,
      json.url,
      "bokepkartun",
      "sange kok sama kartun, stress...",
     m
    );
  else throw json;
};
handler.help = ["nsfwwaifu"]
handler.tags = ["nsfw"]

handler.command = /^(nsfwwaifu|waifunsfw)$/i

}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i

module.exports = handler
