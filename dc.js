/* Identification */
const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const data = require('quick.db');
const db = require('quick.db');
const express = require('express');
const app = express();
const ayarlar = require("./settings.json");
const ms = require("ms");
const queue = new Map();
let prefix = settings.prefix;

app.get("/", (req, res) => {
  res.send("I Logged!");
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./commands/${file}`);
    let cmdFileName = file.split(".")[0];
    client.commands.set(cmd.help.name, cmd);
    if (cmd.help.aliases) {
      cmd.help.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
    };
  });
});

client.on("ready", async () => {
  let sesliKanalID = client.channels.cache.get("1322596241066164246");
  if (sesliKanalID)
    sesliKanalID.join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

client.on("ready", () => {
  console.log(`${client.user.tag} şuan aktif.`);
});

client.on("message", async msg => {
	if(msg.author.bot) return;
    if (msg.content.toLowerCase() === 'sa') {
		if(msg.channel.type === "dm") return;
            const embed = new Discord.MessageEmbed() 
      .setColor("RANDOM")
      .setDescription(`**Aleyküm Selam hoşgeldin ${msg.author}**`)
        msg.channel.send(embed)
    }
});
client.on("message", async msg => {
	if(msg.author.bot) return;
    if (msg.content.toLowerCase() === 'sunucu') {
		if(msg.channel.type === "dm") return;
            const embed = new Discord.MessageEmbed() 
      .setColor("RANDOM")
      .setDescription(`**discord.gg/montainrp ${msg.author}**`)
        msg.channel.send(embed)
    }
});
client.on("message", async msg => {
	if(msg.author.bot) return;
    if (msg.content.toLowerCase() === 'kurucu') {
		if(msg.channel.type === "dm") return;
            const embed = new Discord.MessageEmbed() 
      .setColor("RANDOM")
      .setDescription(`**Ekip kurucusu Winston ve Sertug'dur ${msg.author}**`)
        msg.channel.send(embed)
    }
});

client.login(settings.key);
require('discord-buttons')(client);
