const {MongoClient, ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to connect to mongo db server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    //delete many 
    // db.collection('Todos').deleteMany({
    //     text:'Nothing to do'
    // }).then((result) => {
    //     console.log(result);
    // });

    //Delete one
    // db.collection('Todos').deleteOne({
    //     text:'Nothing to do'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

    //delete many 
    // db.collection('Users').deleteMany({
    //     name:'Mukesh'
    // }).then((result) => {
    //     console.log(result);
    // });

    //Delete one
    db.collection('Users').deleteOne({
        _id:new ObjectID('5bb2293df9bae40af8081fd2')
    }).then((result) => {
        console.log(result);
    });

    
    client.close();
});