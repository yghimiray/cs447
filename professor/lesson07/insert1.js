const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;
    const db = client.db('testDB');
    var doc = { 'firstname': 'Bella', 'lastname': 'Xing', 'age': 10 };

    db.collection('testCol').insertOne(doc, (err, docInserted) => {
        if (err) throw err;

        console.log(`Success: ${JSON.stringify(docInserted)}!`);
        return client.close();
    });
});