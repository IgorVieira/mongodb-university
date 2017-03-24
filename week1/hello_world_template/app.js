const express = require('express'),
	  app    = express(),
	  engines = require('consolidate')

app.engine('html', engines.nunjucks);
app.set('view engine', 'html')
app.set('views', __dirname + '/views');


app.get('/', (req, res) =>{
	res.render('hello', {'name':'Template'})
})

app.get('*', (req, res) => {
	res.sendStatus(404)
})


const server = app.listen(8000, () =>{

	let port = server.address().port;

	console.log(`Express running in http://localhost:${port}`)
})