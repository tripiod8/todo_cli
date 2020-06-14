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
.command('fix')
.description('Fix a todo')
.requiredOption('-i, --id <_id>', 'Must have an _id')
.option('-w, --what <type>', 'Here is some query test text', 'all')
.action((cmd) => {
   console.log(cmd.id);
   console.log(cmd.what);
   if(cmd.what === 'all'){
     prompt(questions).then(answers => {
       fixTodoIn(cmd.id, answers)
     })
   } else if(cmd.what === 'task'){
    prompt(questions[0]).then(answers => {
      fixTodoIn(cmd.id, answers)
    })
   } else if(cmd.what === 'date'){
    prompt(questions[1]).then(answers => {
      fixTodoIn(cmd.id, answers)
    })
   } else if(cmd.what === 'tag'){
    prompt(questions[2]).then(answers => {
      fixTodoIn(cmd.id, answers)
    })
   }
});

program.parse(process.argv);
