//import discord
const Discord = require('discord.js');
require('dotenv').config();


//discord client
const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

//client message event
client.on("messageCreate", (message) => {
    if(message.content === "ping"){
        message.reply("pong");
    }

})

client.login(process.env.TOKEN);