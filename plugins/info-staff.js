//Codice di info-staff.js

//Plugin by Gab, Lucifero & 333 staff






let handler = async (m, { conn }) => {

const text = 
`╭─────────╮\n┃ 𝐈𝐍𝐅𝐎 𝐒𝐓𝐀𝐅𝐅  ꙰ 𝟥𝟥𝟥 𝔹𝕆𝕋  ꙰ 
┃
┃ 👑 𝐎𝐖𝐍𝐄𝐑
┃ • gnegne: wa.me/393455383567
┃ ℹ️ 𝐃𝐄𝐒𝐂𝐑𝐈𝐙𝐈𝐎𝐍𝐄 𝐁𝐎𝐓
┃𝟑𝟑𝟑 𝐁𝐎𝐓 𝐞̀ 𝐢𝐥 𝐛𝐨𝐭 𝐩𝐢𝐮̀ 𝐫𝐢𝐜𝐡𝐢𝐞𝐬𝐭𝐨 𝐢𝐧\n┃ 𝐢𝐭𝐚𝐥𝐢𝐚, 𝐜𝐨𝐧 𝐮𝐧𝐚 𝐛𝐚𝐬𝐞 𝐭𝐨𝐭𝐚𝐥𝐦𝐞𝐧𝐭𝐞\n┃ 𝐧𝐮𝐨𝐯𝐚 𝐯𝐞𝐫𝐬𝐢𝐨𝐧𝐞 𝟐𝟎𝟐𝟔 𝐜𝐫𝐞𝐚𝐭𝐚\n┃ 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐝𝐚𝐥𝐥𝐨 𝐬𝐭𝐚𝐟𝐟, 𝐞̀ 𝐢𝐧\n┃ 𝐠𝐫𝐚𝐝𝐨 𝐝𝐢 𝐠𝐞𝐬𝐭𝐢𝐫𝐞 𝐠𝐫𝐮𝐩𝐩𝐢. 𝐍𝐞𝐥 𝐛𝐨𝐭 𝐬𝐨𝐧𝐨\n┃ 𝐢𝐧𝐜𝐥𝐮𝐬𝐢 𝐦𝐢𝐧𝐢𝐠𝐢𝐨𝐜𝐡𝐢, 𝐜𝐨𝐦𝐚𝐧𝐝𝐢 𝐬𝐭𝐚𝐟𝐟,\n┃ 𝐜𝐨𝐦𝐚𝐧𝐝𝐢 𝐨𝐰𝐧𝐞𝐫 𝐞 𝐭𝐚𝐧𝐭𝐨 𝐚𝐥𝐭𝐫𝐨,\n┃ 𝐟𝐚𝐜𝐢𝐥𝐦𝐞𝐧𝐭𝐞 𝐬𝐜𝐚𝐫𝐢𝐜𝐚𝐛𝐢𝐥𝐞 𝐝𝐚𝐥 𝐥𝐢𝐧𝐤 𝐝𝐢\n┃ 𝐠𝐢𝐭𝐡𝐮𝐛. 𝐈𝐧𝐟𝐨 𝐨 𝐝𝐢𝐟𝐟𝐢𝐜𝐨𝐥𝐭𝐚̀? 𝐂𝐨𝐧𝐭𝐚𝐭𝐭𝐚\n┃ 𝐥𝐨 𝐬𝐭𝐚𝐟𝐟 𝐩𝐞𝐫 𝐚𝐯𝐞𝐫𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐨.
╰─────────╯
`

const mentions = [
'393882471151@s.whatsapp.net',
'212688151945@s.whatsapp.net'
]

await conn.sendMessage(m.chat, { text, mentions }, { quoted: m })

m.react('👑')
}

handler.help = ['staff']
handler.tags = ['admin']
handler.command = ['staff']

export default handler
