let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('https://yuuapi.herokuapp.com/randomimage/meme/suki?apikey=BETA'), 'Nih bilek', wm, 'Ancirt', '.memeindo', m)
    if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.url)
    conn.sendFile(
      m.chat,
      json.url,
      "nih bilek",
     m
    );
  else throw json;
};
handler.help = ["memeindo"]
handler.tags = ["fun"]
handler.command = /^(memeindo)$/i

module.exports = handler