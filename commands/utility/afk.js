const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { afk } = require("../../utils/etc/afk")
module.exports = {
    config: {
        name: "afk",
        aliases: ['afk'],
        category: "utility",
        description: "Set you afk",
        usage: "[prefix <afk>]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
   const reason = args.join(" ") || 'No reason!';

        afk.set(message.author.id, [Date.now(), reason]);

        message.channel.send(
            new MessageEmbed()
              .setDescription(`You have been set as AFK. \`${reason}\``)
              .setTimestamp()
              .setColor(`RANDOM`)
              .setFooter(`123`)
        )
}
}