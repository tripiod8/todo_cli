const program = require('commander');
const { prompt } = require('inquirer');
const { completeTodoIn, fixTodoIn} = require('../controllers/update');

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
.command('complete <_id>')
.alias('c')
.description('Complete a todo')
.action(_id => completeTodoIn(_id));

program
.command('fix <_id>')
.alias('x')
.description('Fix a todo')
.action((_id) => {
    prompt(questions).then((answers) => {
        fixTodoIn(_id, answers)
    });
});

program.parse(process.argv);