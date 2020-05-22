const mongoose = require('mongoose');

// Connect to Mongo
const db = mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err =>console.log(err));

// Import Model
const Todo = require('./model/todoSchema');

// Add Todo
const addTodoIn = (todo) => {
  Todo.create(todo).then(todo => {
    console.info('New Todo Added');
    mongoose.disconnect();
  }).catch(err => console.error(err));
};



// Remove Todo
const removeTodoIn = (_id) => {
  Todo.deleteOne({ _id })
    .then(todo => {
      console.info('Todo Removed');
      mongoose.disconnect();
    });
 };

  module.exports = {
    addTodoIn,
    removeTodoIn
  }


