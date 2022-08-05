const Discord = require("discord.js") 
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
// const colors = require('../../colours.json')
module.exports = {
    config: {
        name: "antialt",
        aliases: ['anta', 'antia', 'aa'],
        category: "owner",
        description: "enable antialt in channel",
        usage: "[prefix <antialt> ]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
      if(message.member.hasPermission('ADMINISTRATOR')) {
     var wchannel = args[0];
 if(!wchannel)
 {
   return message.reply("Please Give me enable or disable")
 }
 if(wchannel == "enable" || "Enable") 
 {
   db.set(`antialt_${message.guild.id}`, wchannel);
   message.reply(`OK now anti-alt is enabled`);
   return;
 }
 else if(wchannel == "disable")
 {
   db.delete(`antialt_${message.guild.id}`);
   message.reply(`OK now anti-alt is disabled`);
   return;
 }else {
 return message.reply("You didnt enter enable or disable")
 }
    }else{
      message.channel.send("You donot have permission to use this command")
    }
}
}