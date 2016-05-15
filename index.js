var express = require('express')
var app = express()
var cors = require('cors')

var corsOptions = {
  origin: ['http://localhost:90', 'http://127.0.0.1:90']
}
// app.use(cors()) full 
app.set('port', (process.env.PORT || 90))
app.get('/', cors(corsOptions), function (req, res) {
  res.json({contacts:[
			  	{name:'Nati' , tel :'098-325-3214'},
			  	{name:'Somchai' , tel :'098-334-4245'},
			  	{name:'Pradii' , tel :'098-543-8785'},
			  	{name:'nati' , tel :'098-346-2347'}
  				]
 	 }
)
})
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
