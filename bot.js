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
clien.on('message', message => {
      if(message.content == '!قران 1'){
        message.react('🔊')}  return;
  const ytdl = require('ytdl-core');
    const stram0ptions = { seek: 0, volume: 100};  
    const broadcast = 
clien.createVoiceBroadcast();



message.gulid.member(message.author).voiceChannel.join()
       .then(connection => {
           const stream = ytdl('https://www.youtube.com/watch?v=Ktync4j_nmA', { filter : 'audioonly'});
           broadcast.playstream(stream);
           const dispatcher = connection.playBroadcast(broadcast);
 })
.catch(console.error);
});

clien.on('messge', message => {
       if(message.content == '!قران 2'){
           message.react('🔊')} return;
    const ytdl = require('ytdl-core');
      const stram0ptions = { seek: 0, volume:100};
      const broadcast = 
clien.createVoiceBroadcast();




message.gulid.member(message.author).voiceChannel.join()
       .then(connection => {
           const stream = ytdl('https://www.youtube.com/watch?v=E1vpbnkTmUE' ,{ filter : 'audioonly' });
           broadcast.playstream(stream);
           const dispatcher = connection.playBroadcast(broadcast);
       })
.catch(console.error);
});
client.login(process.env.BOT_TOKEN); 
