const { MessageEmbed } = require('discord.js');
const { OwnerID } = require('../../config');
const Discord = require("discord.js");

const db = require("quick.db");
module.exports = {
    config: {
           name: "sreply",
        description: "Just a test command",
        usage: " ",
        noalias: "No Aliases",
    category: "suggestion",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {

       if(message.member.hasPermission("ADMINISTRATOR") || message.author === OwnerID.id){
            
let channel = await db.fetch(`suggestion_${message.guild.id}`);
if (channel === null) return;
     
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      
    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];
    const replyQuery = args.slice(1).join(' ');
      
    const number = new MessageEmbed()
      .setDescription(`<:bfdno:832931445991276584>    | I don't think that was a Message ID!`)
      .setColor("#f5ce42")
      
    const id = new MessageEmbed()
      .setDescription(`<:bfdno:832931445991276584>  |You forgot to specify Message ID!`)
      .setColor("#f5ce42")
      
    const query = new MessageEmbed()
      .setDescription(`<:bfdno:832931445991276584>   | You forgot to specify the Reply!`)
      .setColor("#f5ce42")
      
    const reply = new MessageEmbed()
      .setDescription(`<:bfdyes:832931453892558848>  | Successfully Replied the Suggestion.`)
      .setColor("00FFFF")
      
    const noChannel = new MessageEmbed()
      .setDescription(`<:bfdno:832931445991276584>   | No Suggestion Channel found!`)
      .setColor("#f5ce42")
      
    const noMessage = new MessageEmbed()
      .setDescription(`<:bfdno:832931445991276584>   | Didn't find any Message with that ID!`)
      .setColor("#f5ce42")
    
      if(!messageID) return message.channel.send(id);
      
      if (!rgx.test(messageID)) return message.channel.send(number);
      
      if(!replyQuery) return message.channel.send(query)
      
      try{
      const suggestionChannel = message.guild.channels.cache.get(channel)
      
      if(!suggestionChannel) return message.channel.send(noChannel)
      
      const suggestedEmbed = await suggestionChannel.messages.fetch(messageID).catch(error => {
    const noMessage = new MessageEmbed()
      .setDescription(`<:bfdno:832931445991276584>   | Didn't find any Message with that ID!`)
      .setColor("#f5ce42")
  return message.channel.send(noMessage);
  })
     
      const data = suggestedEmbed.embeds[0];
     
      const replyEmbed = new MessageEmbed()
      .setAuthor(`${data.author.name}`, data.author.iconURL)
      .setDescription(data.description)
      .setColor("#f5ce42")
      .addField(`Reply from ${message.author.tag}`, replyQuery)
      .setFooter("Status: Replied")
      .setTimestamp();
      
     suggestedEmbed.edit(replyEmbed)
     
     message.channel.send(reply)
      
      const user = await client.users.cache.find((u) => u.tag === data.author.name)
      
    const embed = new MessageEmbed()
      .setDescription(`You have got a Reply over your Suggestion <:bfdyes:832931453892558848> . **[Message Link](https://discord.com/channels/${message.guild.id}/${channel}/${messageID})**`)
      .setColor("#f5ce42")
      user.send(embed)
        
      } catch(err) {
        return;
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
    }
};