let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} TRI3 ${htka}

Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Pulsa Indosat
• Nomor: 085646606905
• A/n: Asyraf
• Mitra: MikAzu
• Metode pembayaran: Online ( ~Cod~ )

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa.
Pastikan pulsa kamu mencukupi untuk bertransaksi!


📮KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Isi Pulsa', url: 'KE KONTER LAH ANJ'}},
    {index: 4, quickReplyButton: {displayText: 'SUDAH BAYAR', id: '.sudahbayar'}},
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
handler.command = /^pulsatri$/i
handler.private = true

export default handler
