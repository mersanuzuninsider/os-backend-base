class JiraClient {
  getTasks() {
    return Promise.resolve([{
      id: 'OPT-1',
      developer: 'ersan',
      name: 'BLA BLA'
    }, {
      id: 'OPT-2',
      developer: 'cagan',
      name: 'BLA BLA 1'
    }, {
      id: 'OPT-3',
      developer: 'ersan',
      name: 'BLA BLA 2'
    }]);
  }
}

module.exports = new JiraClient();