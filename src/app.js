const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const makeAssociations = require('./models');


const app = express();

makeAssociations();

middlewares.forEach(middleware => {
  app.use(middleware);
});

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

routes(app);

module.exports = app;