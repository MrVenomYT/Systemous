const { MessageEmbed , Discord } = require('discord.js');
const { OwnerID , PREFIX  } = require('../../config');
const db = require('quick.db');
module.exports = {
    config: {
        name: "maintainence",
        description: "will enable or disabled maintainence mode",
        aliases: ["mt"],
        category: "developer",
        usage: "Prefix mt on/off",
       accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
    if (message.member.hasPermission('ADMINISTRATOR') || message.author == OwnerID){
  let prefix;
   
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
    if(!args[0])
    {
      message.channel.send(`You didnt give me ${prefix}maintainenece on/off PLease Give SO i can Understand what to do!!`)
    }
if (args[0] == "on") 

    {
      let ont = db.fetch(`maintain_${message.guild.id}`);
    if(ont == "on")
    {
      message.channel.send("The Maintainence Mode is already on")
      return;
    }
    let on2 = "on";
db.set(`maintain_${message.guild.id}`, on2);
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.guild.channels.create('maintainence-chat', { //Create a channel
            type: 'text', //Make sure the channel is a text channel
            permissionOverwrites: [{ //Set permission overwrites
                id: message.guild.roles.everyone.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            }]
        });
        message.guild.channels.create('maintainence-vc', { //Create a channel
            type: 'voice', //Make sure the channel is a text channel
            permissionOverwrites: [{ //Set permission overwrites
                id: message.guild.roles.everyone.id,
                allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'],
            }]
        });
message.channel.send(`Done i have hidden the all voice  AND TEXT Channels which were in server and maken an maintainence vc and maintainence`)
    }
    if (args[0] == "off") 
    {

let offt = db.fetch(`maintain_${message.guild.id}`);
    if(offt == "off")
    {
      message.channel.send("The Maintainence Mode is already off")
      return;
    }
    let off2 = "off";
db.set(`maintain_${message.guild.id}`, off2);
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.guild.channels.cache.find(channel => channel.name === "maintainence-chat").delete("Maintainence mode off");
message.guild.channels.cache.find(channel => channel.name === "maintainence-vc").delete("Maintainence mode off");


message.channel.send(`Done i have unhidden the all voice  AND TEXT Channels which were in server and deleted the maintainence vc and maintainence chat`)
    }
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