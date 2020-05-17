const {mongooose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');
// var id = '5bb35bcf02abe51ad0cc982f11';
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('TodoBYID', todo);
// }).catch((e) => console.log(e));
 var id = '5bb33cfef8a4fa37986d0fbe';

 User.findById(id).then((user) => {
   if(!user){
     return console.log('User not found');
   }
   console.log('UserById', user);
 }).catch((e) => console.log(e));
