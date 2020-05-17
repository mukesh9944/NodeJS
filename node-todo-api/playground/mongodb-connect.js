//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

// var user = {name:'mukesh', age:23};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to connect to mongo db server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todos', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Mukesh',
    //     age: 35,
    //     localtion: 'Hyderabad'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert users', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    // });

    client.close();
});