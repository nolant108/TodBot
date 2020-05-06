const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('TodBot is Online!');
})

bot.on('message', msg=>{
    if(msg.content === 'Hello Tod'){

        msg.reply('Hello Friend!');

    }

    if(msg.content === 'You are my best friend Tod'){

        msg.reply(' Your even better! :)');

    }

        if(msg.content === 'I love you Tod'){

        msg.reply('Love you too! :)');

    }

    if(msg.content === '!todhelp'){

        msg.reply('Here are my commands' 
        + 'I love you Tod, ' 
        + 'You are my best friend Tod, '
        + 'Hello Tod');

    }
    
})
