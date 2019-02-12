const homeController = require('../controllers/HomeController');


module.exports = {
  basePath: '/',

  routes: [{
    path: '/',
    method: 'get',
    action: homeController.home
  }]
};
