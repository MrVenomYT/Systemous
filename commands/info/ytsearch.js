const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const shorten = require('isgd');
module.exports = {
    config: {
        name: "ytsearch",
        aliases: ['yts', 'ytse', 'youtsearch'],
        category: "info",
        description: "ascii conversion",
        usage: "[prefix <ytsearch> Some Text to search]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
     const text = args.join(' ');
  const search = args.join('+');
  if (!text) {
  return message.channel.send("Enter some text to search for")
  }
  const embed = new Discord.MessageEmbed()
  .setTitle("YT Search")
  .addField(`You Searched for`, `${text}`)
  .addField(`Results`, `[Here's What I found](https://youtube.com/results?search_query=${search})`)
  .setColor("RANDOM");
  message.channel.send(embed);
}
} 