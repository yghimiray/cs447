const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;

    const db = client.db('testDB');

    const query = {};
    const projection = { firstname: 1, lastname: 1, _id: 0 };

    db.collection('testCol').find(query).project(projection)
        .skip(1).limit(3).sort('age', 1).toArray(function(err, docArr) {
            if (err) throw err;
            docArr.forEach(function(doc) {
                console.log(doc);
            });

            client.close();
        });
});