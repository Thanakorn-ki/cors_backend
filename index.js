var express = require('express')
var app = express()
var cors = require('cors')
app.use(cors())
app.set('port', (process.env.PORT || 90))
app.get('/', function (req, res) {
  res.json({name: 'hello world.'})
})
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
