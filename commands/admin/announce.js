const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { OwnerID , PREFIX } = require('../../config');
const toHex = require("colornames");
module.exports = {
    config: {
        name: "announce",
         description: "Make an Announcemnet in your Server",
        aliases: ["an"],
        category: "admin",
        usage: "Prefix an",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
  const anchannel = message.mentions.channels.first();
    if (!anchannel) {
      return message.channel.send(`Usage: ${PREFIX} announce <channel> <msg>`);
    }
    if (!args.slice(1).join(" ")) {
      return message.channel.send(
        "Please add some text to make an Announcement"
      );
    }

    const crembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle(`New Server Announcement`)
      .setDescription(args.slice(1).join(" "), {
        allowedMentions: { parse: ["users"] },
      })
.setTimestamp()     .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          anchannel.send(crembed)
          
    const crembed1 = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle(`Announcement Update`)
      .setDescription(`Announcement has been sent to ${anchannel}`)
.setTimestamp()     .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          message.channel.send(crembed1).then(msg => {
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