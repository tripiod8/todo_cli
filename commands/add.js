const { prompt } = require('inquirer');
const moment = require('moment');
//const addTodoDb = require('../index');
const {addTodoIn, findTodoIn} = require('../index');

const questions = [
    {
      type: 'input',
      name: 'task',
      message: 'Todo Task'
    },
    {
      type: 'input',
      name: 'date',
      message: 'Todo Date'
    },
    {
      type: 'input',
      name: 'time',
      message: 'Todo Time'
    },
    {
       type: 'input',
       name: 'tag',
       message: 'Todo Tag'
    }
  ];

 const Add = {
     add(){
        prompt(questions).then((answers) => {
            addTodoIn(answers)
        })
    }
 }

module.exports = Add;