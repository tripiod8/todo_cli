const mongoose = require('mongoose');
const Todo = require('../model/todoSchema');

// Connect to Mongo
const db = mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err =>console.log(err))

//Complete todo
const completeTodoIn = (_id) => {
   Todo.updateOne({ _id }, { $set: { status: 'Complete'}})
      .then(todo => {
         console.info('Todo Updated');
         mongoose.disconnect();
    });
};

// Fix todo
const fixTodoIn = (_id, todo) => {
   Todo.updateOne({ _id }, todo)
      .then(todo => {
         console.info('Todo Fixed');
         mongoose.disconnect();
    });
}

module.exports = {
   completeTodoIn,
   fixTodoIn
};
