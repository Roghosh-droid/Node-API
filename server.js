const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World bhai')
})

app.listen(3000)