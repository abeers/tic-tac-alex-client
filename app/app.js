// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#the-button').on('click', () => {
    $('#the-display').text(`This project is a ${Math.floor(Math.random() * 100)} out of 100`)
  })
})
