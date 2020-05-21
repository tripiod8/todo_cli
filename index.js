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
const addTodoIn = (todo) => {
  Todo.create(todo).then(todo => {
    console.info('New Todo Added');
    mongoose.disconnect();
  }).catch(err => console.error(err))
}

// Find todo
const findTodoIn = (_tag) => {
  Todo.find({ tag: _tag })
    .then(todo => {
      console.info(todo);
      console.info(`${todo.length} matches`);
      mongoose.disconnect();
    }).catch(err => console.error(err))
}

// Update todo
const updateTodoIn = (_id) => {
  Todo.updateOne({ _id }, { $set: { status: 'Complete'}})
    .then(todo => {
      console.info('Todo Updated');
      mongoose.disconnect();
    });
}

// Remove Customer
const removeTodoIn = (_id) => {
  Todo.deleteOne({ _id })
    .then(todo => {
      console.info('Todo Removed');
      mongoose.disconnect();
    });
}

// List todo
const listTodoIn = (_date) => {
  Todo.find( { date: { $gte: _date } } )
    .then(todo => {
      console.info(todo);
      console.info(`${todo.length} matches`);
      mongoose.disconnect();
    }).catch(err => console.error(err))
}

// Update Customer
const fixTodoIn = (_id, todo) => {
  Todo.update({ _id }, todo)
    .then(todo => {
      console.info('Todo Fixed');
      mongoose.disconnect();
    });
}

  module.exports = {
    addTodoIn,
    findTodoIn,
    updateTodoIn,
    removeTodoIn,
    listTodoIn,
    fixTodoIn
  };

