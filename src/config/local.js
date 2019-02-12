const baseConfig = require('./base');


const dbConfig = Object.freeze({
  ...baseConfig.dbConfig,
  HOST: 'postgres',
  PORT: 5432,
  NAME: 'os',
  USERNAME: 'postgres',
  PASSWORD: 'mysecretpassword'
});

const loggerConfig = Object.freeze({
  ...baseConfig.loggerConfig,
});

const jwtConfig = Object.freeze({
  ...baseConfig.jwtConfig,
  secretKey: 'SECRETKEY'
});

const config = Object.freeze({
  ...baseConfig.config,
  key: 'local',
  dbConfig,
  loggerConfig,
  jwtConfig
});

module.exports = config;
