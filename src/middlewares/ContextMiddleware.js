const RequestContext = require('../lib/ctx/ReqCtx');


class ContextMiddleware {
  constructor(logger) {
    this.logger = logger;
  }

  apply() {
    return (request, response, next) => {
      request.ctx = new RequestContext(this.logger);

      response.on('finish', () => {
        request.ctx.setData('http', {
          path: request.originalUrl,
          method: request.method,
          userAgent: request.headers['user-agent'],
          isSecure: request.secure,
          status: response.statusCode,
          statusMessage: response.statusMessage
        });

        request.ctx.finalizeRequest();
      });

      next();
    };
  }
}

module.exports = ContextMiddleware;
