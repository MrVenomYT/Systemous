const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    config: {
        name: "nuke",
        aliases: ["nk"],
        description: "Adds role to a user",
        category: "owner",
        usage: "[name | nickname | mention | ID] <role>",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

        if (message.member.hasPermission("ADMINISTRATOR")){
let reason = args.join(" ");
const nukeChannel = message.channel;
//Input checking
if(!reason) reason = "No reason is given";
if(!nukeChannel.deletable) return message.channel.send('This channel is not deleteable')
//executing
await nukeChannel.clone().catch(err => console.log(err)) && await nukeChannel.delete(reason).catch(err => console.log(err));
        }else{

message.channel.send('You donot Have permission to use this commands')

        }
    }
};