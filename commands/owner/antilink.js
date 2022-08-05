const Discord = require("discord.js") 
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
// const colors = require('../../colours.json')
module.exports = {
    config: {
        name: "antilink",
        aliases: ['antli', 'antil', 'al'],
        category: "owner",
        description: "enable antilink in channel",
        usage: "[prefix <antilink> ]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
      if(message.member.hasPermission('ADMINISTRATOR')) {
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
      if(!content)
    {
      message.channel.send(`You didnt gave me an on or off option e.g - ${prefix}antilink on/off`);
      return;
    }
    if (content.toLowerCase() === "on") 
    {
       let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "on")
      {
        message.channel.send("You have already turned on the antilink");
        return;
      }
      let on1 = "on";
      db.set(`antilink_${message.guild.id}`, on1);
      message.channel.send("Ok now i will Delete the message when someone sends the link in chat");
    }
     else if (content.toLowerCase() === "off") 
    {
        let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "off")
      {
        message.channel.send("You have already turned off the antilink");
        return;
      }
      let off1 = "off";
      db.set(`antilink_${message.guild.id}`, off1);
      message.channel.send("Ok now i will not Delete the message when someone sends the link in chat");
    }
    else {
      return message.reply("You didnt gave me on or off");
    }
    }else{
      message.channel.send("You donot have permission to use this command")
    }
}
}