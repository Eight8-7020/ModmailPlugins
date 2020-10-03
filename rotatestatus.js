module.exports = function({ bot, config }) {
    // requiring the fs and ini packages
    const fs = require('fs');
    const ini = require('ini');
  
    // requiring plugins.config.ini
    const pluginsconfig = ini.parse(fs.readFileSync('./ModmailPlugins/plugins.config.ini', 'utf-8'));
    
    setInterval(bot.editStatus(pluginsconfig.status), pluginsconfig.interval)
  }