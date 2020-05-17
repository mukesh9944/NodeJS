const {MongoClient, ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        console.log('Unable to connect to mongo db server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //   _id : new ObjectID('5bb2375e144b21521134addb')
    // }, {
    //   $set: {
    //     completed : false
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
      _id : new ObjectID('5bb22816c95ec527dcf62f87')
    }, {
      $set: {
        name:'Mukesh'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })

    client.close();
});
