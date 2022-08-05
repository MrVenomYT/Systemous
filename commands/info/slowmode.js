const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "slowmode",
        aliases: ['sm', 'slowm', 'slm'],
        category: "info",
        description: "add slowmode in channel",
        usage: "[prefix <slowmode> <time>]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
      if(message.member.hasPermission('ADMINISTRATOR')) {
  if (!args[0])
  return message.channel.send(
    `You did not specify the time in seconds you wish to set this channel's slow mode too!`
  );
  
if (isNaN(args[0])) return message.channel.send(`That is not a number!`);

message.channel.setRateLimitPerUser(args[0]);
message.channel.send(
  `Set the slowmode of this channel too **${args[0]}**`
);
    }else{
      message.channel.send("You donot have permission to use this command")
    }
}
}