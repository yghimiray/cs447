const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true },
	function (err, client) {
		if (err) throw err;
		const db = client.db('testDB');
		const docs = [{ 'student': 'Calvin', 'grade': 90 },
		{ 'student': 'Susie', 'grade': 95 }];

		db.collection('testCol').insertMany(docs, (err, docInserted) => {
			if (err) throw err;

			console.log(`Success: ${JSON.stringify(docInserted)}!`);
			return client.close();
		});
	});
