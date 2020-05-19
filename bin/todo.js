#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
const addTodo = require('../commands/add');

program
.version(pkg.version)

program
.command('add')
.alias('a')
.description('Add a todo')
.action(addTodo.add)

program
.command('find', 'Find a todo');

program
.command('update', 'Update todo as complete');

program
.command('remove', 'Remove a todo')


program
.command('list', 'List todos');


program.parse(process.argv);