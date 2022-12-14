const { readdirSync } = require("fs");
// const {duration } = require('../../handler/functions');

module.exports = (bot) => {

 
    const load = dirs => {
   
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            bot.commands.set(pull.config.name, pull);
            if (pull.config.aliases) pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
          };
        };
  
        ["economy", "fun", "image", "info", "moderation", "owner", "games" , "suggestion" , "admin" , "setup" , "utility" , "developer" ].forEach(x => load(x));
}; 
   