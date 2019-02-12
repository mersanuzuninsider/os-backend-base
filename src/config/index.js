const baseConfig = require('./base');


let config;

if (process.env.NODE_ENV === 'prod') {
  config = require('./prod');

  if (JSON.stringify(config).indexOf(baseConfig.placeholders.NOT_SET) > -1) {
    throw new Error('Not set config value');
  } else if (JSON.stringify(config).indexOf(baseConfig.placeholders.OVERRIDE) > -1) {
    console.warn(`Found ${baseConfig.placeholders.OVERRIDE} key in config`);
  }

} else {
  config = require('./local');
}

module.exports = config;
