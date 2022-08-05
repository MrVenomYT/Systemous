const Discord = require("discord.js") 
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
// const colors = require('../../colours.json')
module.exports = {
    config: {
        name: "atrd",
        aliases: ['aord', 'aod', 'ard'],
        category: "owner",
        description: "enable autorole in any server",
        usage: "[prefix <atrd> ]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
    if (message.member.hasPermission("MANAGE_SERVER")) {
db.delete(`tagg_${message.guild.id}`);
db.delete(`tagn_${message.guild.id}`);
return message.reply("Done Deleted Official role and tag from my database");
  }
    }
}