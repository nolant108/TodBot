const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('TodBot is Online!');
})

bot.on('message', msg=>{
    if(msg.content === 'Hello Tod'){

        msg.reply('Hello Friend!');

    }
})