const placeholders = Object.freeze({
  OVERRIDE: '__OVERRIDE__',
  NOT_SET: '__NOT_SET__'
});

const dbConfig = Object.freeze({
  HOST: placeholders.NOT_SET,
  PORT: placeholders.NOT_SET,
  NAME: placeholders.NOT_SET,
  USER: placeholders.NOT_SET,
  PASSWORD: placeholders.NOT_SET,
});

const loggerConfig = Object.freeze({
  path: {
    error: 'log/error.log',
    combined: 'log/combined.log',
  },
});

const jwtConfig = Object.freeze({
  secretKey: placeholders.NOT_SET
});

const config = Object.freeze({
  key: 'base',
});

module.exports = {
  placeholders,
  config,
  dbConfig,
  loggerConfig,
  jwtConfig
};
