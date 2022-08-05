const { MessageEmbed , Discord } = require('discord.js');
const { OwnerID } = require('../../config');
module.exports = {
    config: {
        name: "test",
        description: "Just a test command",
        usage: " ",
        noalias: "No Aliases",
        category: "info",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

       if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
          message.channel.send("**testing...**").then(m => {
            let test = m.createdTimestamp - message.createdTimestamp
            // message.delete({ timeout: 10000 });
            const embed = new MessageEmbed()
            .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
          .setDescription(`Dear ${message.author} \t **This is a test command for testing purposes**`)
              .setTimestamp()
              .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          message.channel.send(embed).then(msg => {
                msg.delete({ timeout: 10000 });
            });
        })
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