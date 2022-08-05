const Discord = require("discord.js");
let os = require("os");
let cpuStat = require("cpu-stat");
const {duration } = require("../../handler/functions");
module.exports = {
   config: {
        name: "botinfo",
        aliases: ['btinfo'],
        category: "owner",
        cooldown : 3,
        description: "Sends detailed info about the client",
        usage: "[prefix <botinfo> ]",
        accessableby: "ADMINISTRATOR"
    },
    run: async (client, message, args, cmduser, text, prefix) => {
    try{
      cpuStat.usagePercent(function (e, percent, seconds) {
          if (e) {
              return console.log(String(e.stack).red);
          }
          const Duration = duration(client.uptime)
          let connectedchannelsamount = 0;
          let guilds = client.guilds.cache.map((guild) => guild);
          for (let i = 0; i < guilds.length; i++) {
              if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
          }
          const botinfo = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.displayAvatarURL())
              .setTitle("__**Stats:**__")
              .setColor("GREEN")
              .addField("⏳ Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
              .addField("⌚️ Uptime ", `\`${Duration}\``, true)
              .addField("\u200b", `\u200b`, true)
              .addField("📁 Users", `\`${client.users.cache.size}\``, true)
              .addField("📁 Servers", `\`${client.guilds.cache.size}\``, true)
              .addField("\u200b", `\u200b`, true)
              .addField("📁 Voice-Channels", `\`${client.channels.cache.filter((ch) => ch.type === "voice").size}\``, true)
              .addField("📁 Connected Channels", `\`${connectedchannelsamount}\``, true)
              .addField("\u200b", `\u200b`, true)
              .addField("👾 Discord.js", `\`v${Discord.version}\``, true)
              .addField("🤖 Node", `\`${process.version}\``, true)
              .addField("\u200b", `\u200b`, true)
              .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
              .addField("🤖 CPU usage", `\`${percent.toFixed(2)}%\``, true)
              .addField("🤖 Arch", `\`${os.arch()}\``, true)
              .addField("\u200b", `\u200b`, true)
              .addField("💻 Platform", `\`\`${os.platform()}\`\``, true)
              .addField("API Latency", `\`${client.ws.ping}ms\``, true)
             .setFooter(`All right reserved by [ Coding ] 👑 Venom#6969` ,  client.user.displayAvatarURL());
          message.channel.send(botinfo).then(msg => {
                msg.delete({ timeout: 10000 });
            });
      });
    } catch (e) {
        console.log(e);
    }
  },
};
