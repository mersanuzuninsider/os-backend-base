const HttpStatus = require('http-status');
const jiraService = require('../services/JiraService');


class JiraController {
  async tasks(request, response) {
    const {
      developer
    } = request.params;

    const developerTasks = await jiraService.getDeveloperTasks(developer);

    response.send(developerTasks);
  }
}

module.exports = new JiraController();