// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameApi = require('./game/api.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#the-button').on('click', function () {
    $('#the-display').text(`This project is a ${Math.floor(Math.random() * 100)} out of 100`)
  })
  $('#the-other-button').on('click', gameApi.getGames)
})
