const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA3NjM2OTM2MjQ4MTMxNjM1.XrLt_A.1dzmRtWuvTOOZ2ZnzgmZtU-kSb4';

bot.login(token);

bot.on('ready', () =>{
    console.log('TodBot is Online!');
})

bot.on('message', msg=>{
    if(msg.content === 'Hello Tod'){

        msg.reply('Hello Friend!');

    }
})