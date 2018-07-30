const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
client.on('ready', () => {
    console.log('I am ready!');
});

  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ليس لديك البرمشن المطلوب لاستخدام هذا الامر ❌**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**عدد اعضاء السيرفر 👤 **' , `${message.guild.memberCount}`)
.addField('**اونر السيرفر 👑**' , `${message.guild.owner.user.username}`)
.addField(`**الرومات :scroll: **`,true)
.addField(`# الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**عدد الرتب**:briefcase:`,`${message.guild.roles.size}`)
        message.channel.send({embed:embed})
    }
});

    client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})
    client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  client.on('guildCreate', rebel => {
let Rebel = rebel.guild.owner;
let codes = rebel.roles.find('name', 'ATY');
let join = [`شرفتنآآ بدخول بوت ${client.tag}
إلى سيرفرك المحترم ${rebel.guild.name}
سبورت البوت <https://discord.gg/cEtEXru>ءء`]
rebel.guilds.get("348375103316426755").guild.member(Rebel).addRole(codes)
rebel.guild.owner.send(join)
});  

 client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
 
 __~~ATY~~__
╔═══╦════╦╗──╔╗────╔══╗╔═══╦════╗
║╔═╗║╔╗╔╗║╚╗╔╝║────║╔╗║║╔═╗║╔╗╔╗║
║║─║╠╝║║╚╩╗╚╝╔╝────║╚╝╚╣║─║╠╝║║╚╝
║╚═╝║─║║──╚╗╔╝─╔══╗║╔═╗║║─║║─║║
║╔═╗║─║║───║║──╚══╝║╚═╝║╚═╝║─║║
╚╝─╚╝─╚╝───╚╝──────╚═══╩═══╝─╚╝
♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ 
 __created By__: ATY

Server Support : https://discord.gg/cEtEXru

bot link : https://goo.gl/AmyZY7
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "tc")) {
    await message.channel.send("470659610521632769").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})
   client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("!avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

  
  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`!help `,` !invite`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);1000

});
  
  client.on('message', message => {
if(message.content == '<@472471186090098708>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  
  const gif = require("gif-search")
client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
console.log('[Gif Search] Developed By Ghost')
        if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
        let args = message.content.split(' ').slice(1).join(' ')
            if (!args) return message.reply('يجب كتابة أسم الصورة')
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
} 
});
  
  client.on('message',async message => {
if(message.content === 'unbanall') {
message.guild.fetchBans().then(ba => {
ba.forEach(ns => {
message.guild.unban(ns);
});
});
}
});
    client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});
  client.on('message', message => {
   if(message.content.startsWith(prefix + "دعوات")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} لقد قمت بدعوه ${inviteCount} دعوه.`);
});
  }
});

  client.on('message', ReBeeL => {
  var prefix = "-";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "bcowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** -bcowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
  
client.on('message', message => {
    var prefix = "!"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Active"));
    });


client.login(process.env.BOT_TOKEN); 
