const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "1244642527638982657" || message.author.id == "1245513833930424430" || message.author.id == "1321109242769440798"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ffa500")
		.setTitle("**Ekip içi toplantı olacaktır. Kısa sürede ses kanallarına giriş yapınız!**")
		.setImage("https://cdn.discordapp.com/attachments/1244698620545073172/1322584348523757599/indir_1.jpg?ex=67716829&is=677016a9&hm=bb2d588bcf4476ec9303b7cf0080ade6034793b5615fc5635b576fe90b5cf2b3&")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['toplanti']
}
exports.help = {
    name: "toplanti"
}