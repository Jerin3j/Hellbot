const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.hizliresim.com/lntcbub.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Amal*
*owner number wa.me/919526941079*

*subscribe yt : https://youtu.com/c/TECHNO-CART1*

*githublink : https://github.com/Jerin3j/Hellbot*

*audio commads : https://github.com/cyberchekuthan/Amalser_v2/tree/master/uploads*
`}) 

}));
