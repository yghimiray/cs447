const MongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;
    const db = client.db('testDB');

    db.collection('testCol').updateOne({ '_id': new ObjectID('60ce12cb3c9d6e6678b1f6a5') }, { $set: { 'firstname': 'Ivy', 'lastname': 'Friday' } }, function(err, result) {
        if (err) throw err;
        console.log(result.result);
        return client.close();
    });

});