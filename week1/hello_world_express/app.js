const express = require('express'),
		app = express();


app.get('/', (req, res) =>{
	res.send('Hello, World!')
})

app.get('*', (req, res) => {
	res.sendStatus(404)
})


const server = app.listen(8000, () =>{

	let port = server.address().port;

	console.log(`Express running in http://localhost:${port}`)
})