const http = require('http')

const server = http.createServer((request, response) =>{
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello, World!\n");
})
.listen(8000, () => {
	console.log('Server running at http://localhost:8000')
})
