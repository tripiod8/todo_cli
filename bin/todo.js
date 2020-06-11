#!/usr/bin/env node
const program = require('commander');
const moment = require('moment');
const { prompt } = require('inquirer');
const pkg = require('../package.json');
const { addTodoIn, removeTodoIn} = require('../index');

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

program
.version(pkg.version)

program
.command('add')
.alias('a')
.description('Add a todo')
.action(() => {
    prompt(questions).then((answers) => {
      var newTime = moment(answers.time, 'h:m a').format('h:mm A');
      answers.time = newTime;
      addTodoIn(answers)
    });
});

program
.command('locate', 'locate todos');

program
.command('update', 'update a todo');

program
.command('remove <_id>')
.alias('r')
.description('Remove a todo')
.action(_id => removeTodoIn(_id));

program.parse(process.argv);