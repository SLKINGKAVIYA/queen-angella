const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://ibb.co/myKtDxm";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━✨️*KING KAVIYA*✨️━━━⛦


𝙃𝙀𝙇𝙇𝙊👋 𝙄' 𝘼𝙈 𝘼 𝙆𝘼𝙑𝙄𝙎𝙃𝙆𝘼 𝙄𝙈𝙀𝙎𝙃 𝘽𝙊𝙏.
            *𝙆𝙄𝙉𝙂 𝙆𝘼𝙑𝙄𝙔𝘼😍*

■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -song <text>
☇➣╟ *𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Downloads song for you.
.song  andakare ma

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -video <yt link>
☇➣╟ *𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Downloads video from YouTube link.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -insta <link>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Downloads content from instagram.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -yt<text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Gives you YT links.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -show <show name>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Get info related to tv series and shows.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -gif 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts video to gif.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -tomp3 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts video into audio.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -say <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts text into voice.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -img <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ It sends image from google.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -trt <language code>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Translate the text you tag.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -wiki <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ It sends Wikipedia result.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -lyric <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Finds the lyrics of the song.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -covid <country code>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Send the covid stats of your country.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -weather <city>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Tells you about the weather of your place.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -removebg 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Removes the background of tge image.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -ocr
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Finds the text written on the image.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -wallpaper
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ It sends you random wallpaper.

■□■□■□■□■□𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐖𝐀■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -joke 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ It sends a random joke.
 
❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -meme <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Cations the image into a meme.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -quote 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ It sends a random quote.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -ss <website link>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ It sends the screenshot of the website.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -changesay <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts text into changesay meme image.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -trumpsay
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Convert text into Trump's tweet.

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -compliment 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Gives you a compliment.

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -bitly <link>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Shorten your link.

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -dict 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Dictionary [-dict en;anime]

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -zodiac <leo> 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Tells you about your horoscope.

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -qr <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜   Converts text into qr code.

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -movie 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜  Gives you info about movie.
movie master

❄➣╟*𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜  -anime <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜  Gives you info about anime.
anime Kaviya
■□■□■□■□■𝐊𝐈𝐍𝐆 𝐈𝐒𝐔𝐖𝐀□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -sticker 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts img/gif into a sticker.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -photo 
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts sticker into image.

❄➣╟ *𝘾𝙊𝙈𝙈𝘼𝙉𝘿*➜ -attp <text>
☇➣╟*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉*➜ Converts text into glowing sticker.
☠ex  .attp kaviya
■□■□■□■□■□■□■□■□■□■□
═════💢ＫＩＮＧ ＫＡＶＩＹＡ💢═════
▣▣▣▣▣▣▣▣▣ᴍᴀᴅᴇ ʙʏ ᴋᴀᴠɪʏᴀ▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
