const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const Discord = require('discord.js');
const { Console } = require('console');
module.exports = {
    config: {
        name: "unlock",
        aliases: ["ulk"],
        description: "Unlock a channel",
        category: "owner",
        usage: "[prefix <unlock> #channel]",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if (message.member.hasPermission("ADMINISTRATOR")){
let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`Done | Channel Unlocked!`);
        }else{

message.channel.send('You donot Have permission to use this commands')

        }
    }
};