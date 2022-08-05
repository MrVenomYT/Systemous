const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { OwnerID , PREFIX } = require('../../config');
const toHex = require("colornames");
module.exports = {
    config: {
        name: "delrole",
         description: "Del role from a guild",
        aliases: ["dr"],
        category: "admin",
        usage: "Prefix dr",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
   const role = message.mentions.roles.first();
   
    if (!role) {
      return message.channel.send("`Usage: =delrole <role>`");
    }
    role.delete();
    const crembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle("Role Delete update")
      .setDescription(` Dear ${message.author} the pinged role ${role} has been deleted from the server`)
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
    }
};