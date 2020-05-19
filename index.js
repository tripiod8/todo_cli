const mongoose = require('mongoose');

// Connect to Mongo
const db = mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err =>console.log(err));


// Import model
const Todo = require('./model/todoSchema');


// Add todo
const addTodo = (todo) => {
    Todo.create(todo).then(todo => {
      console.info('New Todo Added');
      mongoose.disconnect();
    });
  }

  module.exports = addTodo;

