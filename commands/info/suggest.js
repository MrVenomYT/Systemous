const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "suggest",
        aliases: ["sgt"],
        category: "info",
          description: "To suggest any feature",
           usage: "suggest",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

      if(!args[0])
{
  message.channel.send("PLease Give me Something to suggest!!")
  return;
}
let args1 = args.join(' ');
const channel = client.channels.cache.get("872467449990217790")
const embed = new MessageEmbed()
.setDescription(`**Suggest Reported**\n Reporter : <@!${message.member.id}>\n Suggestion : ${args1}\n GUild : ${message.guild.name}`)
channel.send(embed)
message.channel.send("Done your suggestion report has been sent to the developers!!")



}
}