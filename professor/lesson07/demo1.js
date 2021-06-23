const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected......');
        const db = client.db('testDB');
        db.collection('testCol').find().each(function(err, doc) {
            if (err) throw err;
            // Print the result. 
            // Will print a null if there are no documents in the db.
            console.log(doc);
            // Close the DB 
            client.close();
        });
    })
    .catch(err => console.log('Error: ', err));