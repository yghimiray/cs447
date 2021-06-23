const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;

    const db = client.db('testDB');
    var query = { 'student': 'Susie' };
    // remove all documents that have 'student' value is 'Susie'
    db.collection('testCol').deleteOne(query, function(err, result) {
        console.log("Result: " + JSON.stringify(result));
        return client.close();
    });
});