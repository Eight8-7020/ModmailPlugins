modules.export = function({bot, config, commands}) {
        commands.addGlobalCommand ('ping', '',(msg, args) => {
		bot.createMessage(msg.channel.id, ":ping_pong: Pinging...").then(m =>{
			const ping = msg.createdTimestamp - m.createdTimestamp;
			m.edit(":ping_pong: Pong! Your Ping Is: " + ping + "ms");
		});
	});
};
