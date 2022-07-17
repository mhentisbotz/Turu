let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*SOURCE CODE MIKAZU MD*
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Neraka', url: 'https://bit.ly/3c0WJz9'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler
