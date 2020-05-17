const {mongooose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');


Todo.remove({}).then((result) => {
   console.log(result);
});

//Todo.findOneAndRemove();
//Todo.findByIdAndRemove();

Todo.findOneAndRemove({_id: '5bb4dcce144b21521134ca0a'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5bb4dcce144b21521134ca0a').then((todo) => {
  console.log(todo);
});
