const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const DIG = require("discord-image-generation")
module.exports = {
    config: {
        name: "blur",
        aliases: ['bl', 'blu', 'blr'],
        category: "info",
        description: "blur any image",
        usage: "[prefix <blur> <image of your choice>]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (bot, message, args) => {
      if(message.member.hasPermission('ADMINISTRATOR')) {
       const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        new DIG.Blur().getImage(avatar, 43);

        let img = await new DIG.Blur().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "affect.png");

        message.channel.send(attach)
    }else{
      message.channel.send("You donot have permission to use this command")
    }
}
}