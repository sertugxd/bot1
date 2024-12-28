const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "1244642527638982657" || message.author.id == "1245513833930424430" || message.author.id == "1321109242769440798"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ffa500")
		.setTitle("**Mahalle Savaşı & Baskın rolleri olacaktır. Seslere giriş sağlayınız!**")
		.setImage("https://hizliresim.com/d1380xu")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['baskin']
}
exports.help = {
    name: "baskin"
}