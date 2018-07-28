
const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "برفكسك";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
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
    member.addRole(member.guild.roles.find("name","【●𝐂𝐈𝐓𝐈𝐙𝐄𝐍●】"));
    });
client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
    newUsers[guild.id].set(member.id, member.user);
  
    if (newUsers[guild.id].size > 2) {
      const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
      guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
      newUsers[guild.id].clear();
    }
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
  });
  client.on('message', message => {
    const responses = [
    'yes', 'no', 'خليك في حالك', 'شفلك كلبه', 'sure', 'ask me later', 'Fuck you','شكرا'
    ]
        if(message.content.startsWith(prefix + 'question')) {
                if(!message.channel.guild) return;
            let args = message.content.split(" ").slice(1);
            if (!args[0]) {
                message.channel.send('**Please type Your question!**');
                return;
                }
       message.channel.sendMessage(`${responses[Math.floor(Math.random() * responses.length)]}`);
                   if (!args[0]) {
              message.edit('1')
              return;
            }
        }
    });


client.login(process.env.BOT_TOKEN); 
