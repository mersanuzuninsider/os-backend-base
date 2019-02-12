const HttpStatus = require('http-status');


class HomeController {
  home(request, response) {
    response.status(HttpStatus.OK)
      .send({
        message: 'Hello world'
      });
  }
}

module.exports = new HomeController();
