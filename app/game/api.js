const config = require('../config.js')

const signUp = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: 'alex@ga' + Math.floor(Math.random() * 1000),
        password: 'password',
        password_confirmation: 'password'
      }
    }
  })
}
const getGames = function () {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games'
  })
}

module.exports = {
  getGames,
  signUp
}
