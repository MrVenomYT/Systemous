const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { OwnerID , PREFIX } = require('../../config');
const toHex = require("colornames");
module.exports = {
    config: {
        name: "createrole",
         description: "Creates A new role in the guild",
        aliases: ["cr"],
        category: "admin",
        usage: "Prefix cr",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
    const name = args.slice(1).join(" ");
    const regex = !/[^a-zA-Z0-9]+/g.test(name);

    if (!args[0]) {
      return message.channel.send(`Usage: ${PREFIX}createrole <colorname> <Name>`);
    }
    if (!name) {
      return message.channel.send("You need to specify a name for your Role");
    }
    if (regex === false) {
      return message.channel.send(
        "That is not valid role name. It can contain only letters and numbers"
      );
    }
    if (name.length > 100) {
      return message.channel.send(
        "Your role can't be more than 100 characters long"
      );
    }
    message.guild.roles.create({
      data: {
        name: name,
        color: toHex(args[0]),
      },
    });

    const crembed = new MessageEmbed()
         .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
      .setTitle("Role update")
      .setDescription(`
      **Role: ** ${name}
**Action: ** Dear ${message.author} 
**Role Color: ** ${args[0]}
**Channel: ** ${message.channel}
**By: ** ${message.member}`)
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