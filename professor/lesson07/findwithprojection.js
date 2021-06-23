const MongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;

    const db = client.db('testDB');

    const query = { _id: new ObjectID('60ce143d3c9d6e6678b1f6a7') };
    const projection = { firstname: 1, lastname: 1, _id: 0 };

    db.collection('testCol').find(query).project(projection).toArray(function(err, docArr) {
        if (err) throw err;
        docArr.forEach(function(doc) {
            console.log(doc);
        });
        client.close();
    });
});