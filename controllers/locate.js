const mongoose = require('mongoose');
const Todo = require('../model/todoSchema');

// Find todo
const findTodoIn = (_tag) => {
   Todo.find({ tag: "Birthday" })
      .then(todo => {
         console.info(todo);
         console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

  // List todo
const listTodoIn = (_date) => {
   Todo.find( { date: { $gte: _date } } )
      .then(todo => {
         console.info(todo);
         console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

module.exports = {
   findTodoIn,
   listTodoIn
};