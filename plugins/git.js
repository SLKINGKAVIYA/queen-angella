const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:𝙆𝙄𝙉𝙂 𝙆𝘼𝙑𝙄𝙔𝘼

😈𝙄'𝙈 𝙆𝙄𝙉𝙂 𝙆𝘼𝙑𝙄𝙔𝘼 𝙒𝙃𝘼𝙏𝙎 𝘼𝙋𝙋 𝘽𝙊𝙏☇

*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍 : http://wa.me/94716961129?text=Hi%20can%20You%20help%20me%20Build%20The%20WhatsappBot%20Sir.%20*

 *𝙏𝙊 𝘾𝙃𝙀𝘾𝙆 𝙐𝙋𝘿𝘼𝙏𝙀𝙎 .update   To update Bot .update now*

 *𝙄'𝙈 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙀𝙇 : https://www.youtube.com/channel/UC2hESq6BCRCU-LKpl7Oq8g*
     
 *𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘽𝙊𝙏 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆: https://chat.whatsapp.com/Hs6rRZsOwAH034EXPinvqo*

 *𝙄'𝙈 𝙔𝙏 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆 : https://chat.whatsapp.com/HkaHOCPgMdJF5eUlRPxTkP*

 *𝙂𝙄𝙏𝙃𝙐𝘽 𝙇𝙄𝙉𝙆 : https://github.com/SLKINGKAVIYA/queen-angella*

 *𝙆𝙄𝙉𝙂 𝙆𝘼𝙑𝙄𝙔𝘼 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘  𝐃𝐑𝐈𝐏𝐒 𝐌𝐄𝐌𝐄𝐒 𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 𝐓𝐎 𝐌𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐃𝐑𝐈𝐏𝐒 𝐎𝐅𝐂 𝐅𝐎𝐑 𝐔𝐏𝐃𝐀𝐓𝐄𝐒*


❄ＫＡＶＩＳＨＫＡ ＩＭＥＳＨ ＷＨＡＴＳ ＡＰＰ ＢＯＴ❄
`}) 

}));
