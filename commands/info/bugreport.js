const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "bugreport",
        aliases: ["bug", "report-bug", "bgr", "report", "error"],
        category: "info",
         description: "To report a bug",
         usage: "bugreport",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
if(!args[0])
{
  message.channel.send("Please Give me Something to report!!")
  return;
}
let args1 = args.join(' ');
const channel = bot.channels.cache.get("999199243967414272")
const embed = new MessageEmbed()
.setDescription(`**Bug Reported**\n Reporter : <@!${message.member.id}>\n Bug : ${args1}\n GUild : ${message.guild.name}`)
channel.send(embed)
message.channel.send("Done your bug report has been sent to the developers thanks for reporting bug we will try to fix asap :)")
      
      


}
}