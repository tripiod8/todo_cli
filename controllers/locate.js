const { promisify } = require('util');
const sleep = promisify(setTimeout);
const mongoose = require('mongoose');
const Todo = require('../model/todoSchema');



const findTodoIn = (_tag) => {
   Todo.find({ tag: _tag })
      sleep(500).then(todo => {
         console.info(todo);
         //console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

module.exports = findTodoIn;










//   // List todo
// const listTodoIn = (_date) => {
//    Todo.find( { date: { $gte: _date } } )
//       .then(todo => {
//          console.info(todo);
//          console.info(`${todo.length} matches`);
//          mongoose.disconnect();
//       }).catch(err => console.error(err));
// };

