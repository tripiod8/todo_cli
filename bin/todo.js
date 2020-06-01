#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const pkg = require('../package.json');
const { addTodoIn, removeTodoIn} = require('../index');
const {findTodoIn, listTodoIn} = require('../controllers/locate');
const { updateTodoIn, fixTodoIn } = require('../controllers/modify');

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
.command('locate', 'Locate something')

  program
  .command('add')
  .alias('a')
  .description('Add a todo')
  .action(() => {
      prompt(questions).then((answers) => {
          addTodoIn(answers)
      })
  });

 program
 .command('update <_id>')
 .alias('u')
 .description('Update a todo')
 .action(_id => updateTodoIn(_id))

  program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a todo')
  .action(_id => removeTodoIn(_id));

 program
 .command('fix <_id>')
 .alias('x')
 .description('Fix a todo')
 .action((_id) => {
   prompt(questions).then((answers) => {
       fixTodoIn(_id, answers)
   })
 });

program.parse(process.argv);