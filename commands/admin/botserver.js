const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { OwnerID , PREFIX ,ERROR_LOGS_CHANNEL } = require('../../config');
module.exports = {
    config: {
        name: "botserver",
         description: "Check what Servers the bot is in!",
        aliases: ["bs"],
        category: "admin",
        usage: "Prefix bs",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID){
  let data = [];
      bot.guilds.cache.forEach((x) => {

    const crembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle("Role updated")
      .setDescription(`🔹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`)
.setTimestamp()     .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          message.channel.send(crembed).then(msg => {
                msg.delete({ timeout: 10000 });
            });
         });

        }else{
          const errorlogs = bot.channels.cache.get(ERROR_LOGS_CHANNEL);
           const Denembed = new MessageEmbed()
          .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
          .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
          .setDescription(`Dear ${message.author} \t **You Donot Have Permission to use this command**`)
.setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          .setTimestamp();
         ERROR_LOGS_CHANNEL.send(Denembed).then(msg => {
                msg.delete({ timeout: 10000 });
            });
            
       }
    }
};