let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${global.ppulsa}]
│ • *Xl:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Gopay:* [${global.pgopay}]
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🏅YOUTUBE', url: https://bit.ly/3c0WJz9}},
    {index: 2, urlButton: {displayText: '💎INSTAGRAM', url: sig}},
    {index: 3, urlButton: {displayText: '🏛GROUP MIKAZU', url: sgc}},
    {index: 4, quickReplyButton: {displayText: '👾MENU', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: '😎OWNER', id: '.owner'}},
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
handler.command = /^dona(te|si)$/i

export default handler
