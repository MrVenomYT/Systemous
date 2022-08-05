const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { OwnerID } = require('../../config');
module.exports = {
    config: {
        name: "delchannel",
        aliases: ["dlc"],
        description: "delete a channel",
        category: "owner",
        usage: "Prefix <delete>",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
  const fetchedChannel = message.mentions.channels.first();
    if (!fetchedChannel) {
      return message.channel.send("`Usage: =delchannel <channel>`");
    }
    fetchedChannel.delete();

    const delembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle("Channel Updates")
      .setDescription(`Dear ${message.author} Channel has been deleted`)
.setTimestamp()     .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          message.channel.send(delembed).then(msg => {
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
    }
};