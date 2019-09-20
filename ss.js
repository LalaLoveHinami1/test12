const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Leo")

client.user.setActivity(`Leo Lover`, {
type: "Watching",
url: "https://www.twitch.tv/anonymous"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
  
});

client.login("NTg1NTQ4OTMxNjM5OTM0OTkx.XYVkHQ.26LOJIKMtf6WxzryAU11CyO7T-4");