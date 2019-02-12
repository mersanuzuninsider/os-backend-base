const jiraController = require('../controllers/JiraController');


module.exports = {
  basePath: '/api',

  routes: [{
    path: '/tasks/:developer',
    method: 'get',
    action: jiraController.tasks
  }]
};
