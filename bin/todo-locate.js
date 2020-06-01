const program = require('commander');
const findTodoIn = require('../controllers/locate');

program
.command('find <_tag>')
//.alias('f')
.description('Find a todo')
.action((_tag) => findTodoIn(_tag))


// program
// .command('list')
// .action(main())
//  program
//  .command('list <_date>')
// // .alias('l')
// .description('List a todo')
// .action(_date => listTodoIn(_date));
program.parseAsync(process.argv);


