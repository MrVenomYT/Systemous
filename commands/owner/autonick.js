const Discord = require("discord.js") 
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
// const colors = require('../../colours.json')
module.exports = {
    config: {
        name: "autonick",
        aliases: ['auton', 'ank', 'an'],
        category: "owner",
        cooldown : 3,
        description: "enable autonick in channel",
        usage: "[prefix <autonick> ]",
        accessableby: "ADMINISTRATOR"
    },
    run:  async (client, message, args) => {
        if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.channel.send({content: 'I don\'t have permission to change your nickname!'});
        const nicknamesXD = [
            "Server Owner",
            `${client.user.username} BETA`,
            "Ping me to get banned",
            "Bommer",
            "Gamer",
            "GodFather",
            "Mafia",
            "Probably who shouldn't be named",
            "BOT",
            `Not ${message.author.username}`//you can more nicknames
        ]

        let nicks = nicknamesXD[Math.floor(Math.random() * nicknamesXD.length)]

        if (message.member.roles.highest.rawPosition >= message.guild.me.roles.highest.rawPosition) {
            message.reply({content: `I would like to nickname you **"${nicks}"** but I have no permission, Sorry.`})
            return
        } 
        if (message.author.id === message.guild.ownerId) {
            message.channel.send({ content: `I would like to nickname you **${nicks}**, but I can't as you are Owner of the server.`})
            return
        }
        else {
            message.member.setNickname(nicks)
            message.reply({content: `Check your new nickname :D`})
        }
    }
}