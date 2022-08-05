const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { OwnerID , PREFIX } = require('../../config');
module.exports = {
    config: {
        name: "giverole",
         description: "Give A new role in the guild",
        aliases: ["gr"],
        category: "admin",
        usage: "Prefix gr",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
 const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Please mention a user you want to give the role to"
      );
    const name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Please type the name of the role");
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Couldn't find the Provided Role");
     user.roles.add(role)

    const crembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle("Role updated")
      .setDescription(`
      Dear ${message.author} the  ${user} now has the ${role} role`)
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