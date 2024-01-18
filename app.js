let express = require('express')
let app = express()
let addDays = require('date-fns/addDays')

app.get('/', (request, response) => {
  let date = new Date()
  let result = addDays(
    new Date(date.getDate(), date.getMonth(), date.getFullYear()),
    100,
  )
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`,
  )
})

module.exports = app
