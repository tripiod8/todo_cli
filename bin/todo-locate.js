const program = require('commander');
const { allTodoIn, tagTodoIn, dateTodoIn, upcomingTodoIn, incompleteTodoIn } = require('../controllers/locate');

program
.command('all')
.alias('z')
.description('Locate all todos')
.action(() => allTodoIn())

program
.command('tag <_tag>')
.alias('t')
.description('Locate todos by tag')
.action((_tag) => tagTodoIn(_tag))

program
.command('date <_date>')
.alias('d')
.description('Locate todos by date')
.action((_date) => dateTodoIn(_date))

 program
 .command('upcoming <_date>')
.alias('u')
.description('Locate upcoming todos')
.action(_date => upcomingTodoIn(_date));

program
.command('incomplete')
.alias('i')
.description('Locate incomplete todos')
.action(() => incompleteTodoIn());

program.parse(process.argv);


