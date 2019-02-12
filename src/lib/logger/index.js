const winston = require('winston');
const config = require('../../config');


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    service: 'application-log'
  },
  transports: [
    new winston.transports.File({
      filename: config.loggerConfig.path.error,
      level: 'error'
    }),
    new winston.transports.File({
      filename: config.loggerConfig.path.combined
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;
