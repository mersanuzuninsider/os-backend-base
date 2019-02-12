const jiraClient = require('../clients/jira');


class JiraService {
  async getDeveloperTasks(developer) {
    const allTasks = await jiraClient.getTasks();

    return allTasks.filter((task) => {
      return task.developer === developer;
    });
  }
}

module.exports = new JiraService();