const config = require('../config.js')

const getGames = function () {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games'
  })
}

module.exports = {
  getGames
}
