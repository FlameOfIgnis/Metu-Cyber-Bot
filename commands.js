const ytdl = require('ytdl-core');
const Discord = require("discord.js");
const opus = require('opusscript');
module.exports = function(client){

	return {
		//noprefix commands are relatively slower because every message needs to be checked through regex, so try to keep their number at a minimum
		//and try to keep majority of commands with prefix
		prefix:{
			"ping": async function(message){
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
			},

			"test": async function(message){
				const m = await message.channel.send('testing')
			},

			"help": async function(message){
				const m = await message.channel.send('Try harder')
			},

			"whoami": async function(message){
				const m = await message.channel.send('root');
				//wait 2 seconds to send this
				setTimeout(function(){message.channel.send('just kidding, not even user lol');},2000)
			},
			//$play https://youtube.com/watch?url 
			"play": async function(message){
				var link = message.content.split(' ')[1];
				const connection = await message.member.voiceChannel.join();
				const stream = ytdl(link, { filter : 'audioonly' });
				const streamOptions = { seek: 0, volume: 1 };
				const dispatcher = connection.playStream(stream, streamOptions);
					dispatcher.on("end", end => {
						voiceChannel.leave();
					 });
				
			}



		},

		handleNofix:function(message){

			//if someone uses :pog: emote, respond with pog
			if(message.content.match(/.*:pog:.*/)) {
				const pog = client.emojis.find(emoji => emoji.name === "pog");
		  		message.channel.send(`${pog}`);
			}

			//If someones sentence contains root, pog
			if(message.content.match(/.*root.*/)){
				const pog = client.emojis.find(emoji => emoji.name === "pog");
		  		message.channel.send(`${pog}`);
			}




		}
	}
}