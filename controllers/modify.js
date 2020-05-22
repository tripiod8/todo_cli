const mongoose = require('mongoose');
const Todo = require('../model/todoSchema');

//Update todo
const updateTodoIn = (_id) => {
   Todo.updateOne({ _id }, { $set: { status: 'Complete'}})
      .then(todo => {
         console.info('Todo Updated');
         mongoose.disconnect();
    });
};

// Fix todo
const fixTodoIn = (_id, todo) => {
   Todo.update({ _id }, todo)
      .then(todo => {
         console.info('Todo Fixed');
         mongoose.disconnect();
    });
}

module.exports = {
   updateTodoIn,
   fixTodoIn
};