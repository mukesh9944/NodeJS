//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to connect to mongo db server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find(
    //     {_id: new ObjectID('5bb226456a46d13e68264aa0')}
    //     ).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch record', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
        
    // }, (err) => {
    //     console.log('Unable to fetch record', err)
    // });

    db.collection('Users').find({name: 'Mukesh'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch record', err)
    });

    
    client.close();
});