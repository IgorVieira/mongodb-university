const MongoClient = require('mongodb')	
	  assert  = require('assert');


MongoClient.connect('mongodb://localhost:27017/video', (err, db) => {
	assert.equal(null, err);
	console.log('Successfully connected to server');



	//Find some documents in our connection

	db.collection('movies').find({}).toArray((err, docs) => {
		docs.forEach((doc) =>{
			console.log(doc.title)
		})
	})

	db.close()


	console.log('Called find()')

})

