const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
    config: {
        name: "decode",
        aliases: ['dec', 'de', 'd'],
        category: "info",
        description: "ascii conversion",
        usage: "[prefix <decode> Some text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
 const url = `http://some-random-api.ml/binary?decode=${args}`;

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`An error occured, please try again!`)
    }

    const embed = new MessageEmbed()
        .setTitle('Decode Binary')
        .setDescription(data.text)
        .setColor('YELLOW')

    await message.channel.send(embed)
}
} 