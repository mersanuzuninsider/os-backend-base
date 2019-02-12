const express = require('express');
const fs = require('fs');
const path = require('path');


const basename = path.basename(__filename);
const routeConfigKeys = [
  'path', 'action', 'method'
];
const routes = fs
  .readdirSync(__dirname)
  .filter(file => {
    return file !== 'index.js' &&
      (file.indexOf('.') !== 0) &&
      (file !== basename) &&
      (file.slice(-3) === '.js');
  }).map(file => {
    return require('./' + file);
  });

module.exports = (app) => {
  routes.forEach(routerConfig => {

    if (typeof routerConfig.basePath === 'undefined') {
      throw new Error('\'basePath\' must be in route config.');
    }

    const router = express.Router();

    routerConfig.routes.forEach((route) => {
      const isValidRoute = routeConfigKeys.every(routeConfigKey => {
        return Object.keys(route).indexOf(routeConfigKey) > -1;
      });

      if (!isValidRoute) {
        throw new Error('\'' + routeConfigKeys.join(', ') + '\' keys must be in each route. Found: ' + JSON.stringify(route));
      }

      router[route.method](route.path,
        (route.middlewares || []).concat(route.action)
      );
    });

    app.use(routerConfig.basePath || '/', router);
  });
};
