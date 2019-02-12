const ContextMiddleware = require('./ContextMiddleware');
const logger = require('../lib/logger');


module.exports = [
  new ContextMiddleware(logger)
].map(middleware => middleware.apply());
