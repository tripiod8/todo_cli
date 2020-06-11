const mongoose = require('mongoose');
const moment = require('moment');
const colors = require('colors')

// Connect to Mongo
const db = mongoose.connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err =>console.log(err));

const Todo = require('../model/todoSchema');

const allTodoIn = () => {
   Todo.find()
   .then(todo => {
      for(let i=0; i<todo.length; i++){
         console.log(` `);
         console.log(`${todo[i]._id}`.brightWhite);
         if(todo[i].status === 'Incomplete'){
            console.log(`task: ${todo[i].task.red}`.grey);
         }else {
            console.log(`task: ${todo[i].task.green}`.grey);
         }
         console.log(`date: ${moment(todo[i].date, 'MM-DD-YYYY').format("dddd, MMMM Do, YYYY").cyan} - ${todo[i].time.brightYellow}`.grey);
         console.log(`tag: ${todo[i].tag.brightMagenta}`.grey);
      }
      console.log(` `);
      console.info(`${todo.length} matches`);
      mongoose.disconnect();
   }).catch(err => console.error(err));
};

const tagTodoIn = (_tag) => {
   Todo.find({ tag: _tag })
      .then(todo => {
         for(let i=0; i<todo.length; i++){
            console.log(` `);
            console.log(`${todo[i]._id}`.brightWhite);
            if(todo[i].status === 'Incomplete'){
               console.log(`task: ${todo[i].task.red}`.grey);
            }else {
               console.log(`task: ${todo[i].task.green}`.grey);
            }
            console.log(`date: ${moment(todo[i].date, 'MM-DD-YYYY').format("dddd, MMMM Do, YYYY").cyan} - ${todo[i].time.brightYellow}`.grey);
            console.log(`tag: ${todo[i].tag.brightMagenta}`.grey);
         }
         console.log(` `);
         console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

const dateTodoIn = (_date) => {
   Todo.find( { date: _date } )
      .then(todo => {
         for(let i=0; i<todo.length; i++){
            console.log(` `);
            console.log(`${todo[i]._id}`.brightWhite);
            if(todo[i].status === 'Incomplete'){
               console.log(`task: ${todo[i].task.red}`.grey);
            }else {
               console.log(`task: ${todo[i].task.green}`.grey);
            }
            console.log(`date: ${moment(todo[i].date, 'MM-DD-YYYY').format("dddd, MMMM Do, YYYY").cyan} - ${todo[i].time.brightYellow}`.grey);
            console.log(`tag: ${todo[i].tag.brightMagenta}`.grey);
            
         }
         console.log(` `);
         console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

const upcomingTodoIn = (_date) => {
   Todo.find( { date: { $gte: _date } } )
      .then(todo => {
         for(let i=0; i<todo.length; i++){
            console.log(` `);
            console.log(`${todo[i]._id}`.brightWhite);
            if(todo[i].status === 'Incomplete'){
               console.log(`task: ${todo[i].task.red}`.grey);
            }else {
               console.log(`task: ${todo[i].task.green}`.grey);
            }
            console.log(`date: ${moment(todo[i].date, 'MM-DD-YYYY').format("dddd, MMMM Do, YYYY").cyan} - ${todo[i].time.brightYellow}`.grey);
            console.log(`tag: ${todo[i].tag.brightMagenta}`.grey);
            
         }
         console.log(` `);
         console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

const incompleteTodoIn = () => {
   Todo.find({ status: "Incomplete" })
      .then(todo => {
         for(let i=0; i<todo.length; i++){
            console.log(` `);
            console.log(`${todo[i]._id}`.brightWhite);
            console.log(`task: ${todo[i].task.red}`.grey);
            console.log(`date: ${moment(todo[i].date, 'MM-DD-YYYY').format("dddd, MMMM Do, YYYY").cyan} - ${todo[i].time.brightYellow}`.grey);
            console.log(`tag: ${todo[i].tag.brightMagenta}`.grey);
         }
         console.log(` `);
         console.info(`${todo.length} matches`);
         mongoose.disconnect();
      }).catch(err => console.error(err));
};

module.exports = {
   allTodoIn,
   tagTodoIn,
   dateTodoIn,
   upcomingTodoIn,
   incompleteTodoIn
};












