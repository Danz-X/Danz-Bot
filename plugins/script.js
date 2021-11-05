let handler  = async (m, { conn, usedPrefix: _p }) => {
let event= `
╭─❒ SCRIPT
│◦➛Base : Gwehj Gatau Banh
│◦➛Recode : *©BotolBotZ*
│
└──────[ GITHUB ]──────❒
  │◦➛Script Ory :
  │◦➛https:-
  │◦➛Script Recode : https://bit.ly/YTBotolBotZ
  └──────────────────❒`
 buttons = [
{buttonId: `menu`, buttonText: {displayText: 'BACK➡️'}, type: 1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI💰'},type:1},
{buttonId: `owner`, buttonText: {displayText: 'OWNER👤'}, type: 1}
]

  conn.fakeReply(m.chat, event, '0@s.whatsapp.net', '*BotolBotZ WANGSAFF*')
}
handler.help = ['sc']
handler.tags = ['hadiah']
handler.command = /^(sc)$/i

handler.fail = null 

module.exports = handler
