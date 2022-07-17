let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *ONLINE* ${htka}`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'YOUTUBE', url: 'https://bit.ly/3c0WJz9'}},
    {index: 3, urlButton: {displayText: 'GROUP MIKAZU', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'OK', id: 'Ok'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.customPrefix = /^bot$/i
handler.command = new RegExp

export default handler
