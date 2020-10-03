module.exports = function({bot, config, commands}) {
        const package = require('./package.json');
        const dependencies = package.dependencies;
        commands.addGlobalCommand('package', '',(msg, args) => {
                bot.createMessage(msg.channel.id, package);
        });
};