module.exports = function({ bot, config, commands }) {
  Const fs = require('fs')
  Const ini = require('ini')
  Const sconfig = ini.parse(fs.readFileSync('./IntervalStatus/config.ini', 'utf-8'))
  Const msg = require(sconfig.status)
  Const prefix = require(config.prefix)
  
  
}
