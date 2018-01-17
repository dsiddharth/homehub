const express = require('express')
const { exec } = require('child_process')
const app = express()

app.get('/volume/:vol', function (req, res) {  
	res.send(req.params.vol)
	exec('onkyo volume='+req.params.vol)
})
app.get('/source/:src', function (req, res) {
	res.send(req.params.src)
	console.log(req.params)
	exec('onkyo source='+req.params.src.replace(/ /g, ''))
})
app.listen(4000, function () {
	  console.log('Example app listening on port 4000!')
})
