const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const DIG = require("discord-image-generation")
module.exports = {
    config: {
        name: "ascii",
        aliases: ['asc', 'asci', 'as'],
        category: "info",
        description: "ascii conversion",
        usage: "[prefix <ascii> Some text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
    let p = args.join(" ")
    figlet(p, function(err, data) {
        if (err) {
            message.channel.send('Something went wrong...');
            console.dir(err);
            return;
        }
        message.channel.send(`\`\`\`${data}\`\`\``)
    });
}
}