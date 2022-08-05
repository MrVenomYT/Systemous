const { MessageEmbed , Discord } = require('discord.js');
const { OwnerID } = require('../../config');
module.exports = {
    config: {
        name: "shutdown",
        description: "It will shutdown the bot",
        aliases: ["sd"],
        category: "developer",
        usage: "Prefix sd",
       accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
    if (message.author == OwnerID){
   

    message.channel.send("Shutting down...").then((m) => {
      bot.destroy();
    });
      const crembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle("Bot Status")
      .setDescription(`
      Dear ${message.author} The Bot has been ShutDown`)
.setTimestamp()     .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          message.channel.send(crembed).then(msg => {
                msg.delete({ timeout: 10000 });
            });
    }else{
 const Denembed = new MessageEmbed()
          .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
          .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
          .setDescription(`Dear ${message.author} \t **You Donot Have Permission to use this command**`)
.setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          .setTimestamp();
         await message.channel.send(Denembed).then(msg => {
                msg.delete({ timeout: 10000 });
            });
    }
  },
};