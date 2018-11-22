const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "515234485609168903"; 
var channel = "515237042729385988";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(' ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ريما :heart_eyes: ')
    },305);
})








client.login(process.env.BOT_TOKEN);
