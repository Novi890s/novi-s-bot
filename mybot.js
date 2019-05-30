const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if(message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }

});

client.login("NTgzNzM4MTczMTkzMTkxNDY3.XPAvJw.vvlJFMpnayBEZPIN-VPl7ukWAuE");
