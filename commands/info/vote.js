const { MessageEmbed , Discord } = require('discord.js');
module.exports = {
    config: {
         name: "vote",
        description: "provide you the vote link",
        aliases: ["vt"],
        category: "info",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

            const embed = new MessageEmbed()
            .setAuthor(`${message.guild.me.displayName} `, bot.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
          .setColor('#f5ce42')
          .setDescription(`Dear ${message.author} \t \n** Here is our vote link\n**
          [Vote Systemous](https://top.gg/bot/865203502245609472/vote)` + `\n` + `In any case of bug feel free to join \n [Support Server](https://discord.gg/HEmshJuPXC)`)
              
              .setTimestamp()
              .setImage('https://media.discordapp.net/attachments/999522063683440692/1001851329297264720/standard.gif')
          .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  bot.user.displayAvatarURL())
          message.channel.send(embed).then(msg => {
                msg.delete({ timeout: 10000 });
            });
        
      
    }
};