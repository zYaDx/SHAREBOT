const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:

https://discord.gg/w4Nuj8J
joined info-· • ●«Legend-Kingdom»● • ·
· • ●«Legend-Kingdom»● • ·                             
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:

https://discord.gg/w4Nuj8J
joined info-· • ●«Legend-Kingdom»● • ·
· • ●«Legend-Kingdom»● • ·                             
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDc2Mjk1Mzk0NjY2NDc5NjM2.DvMgmw.9T6O_0q7pFEjllXpPAIm2mBt_Gw');