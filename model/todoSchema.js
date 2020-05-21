const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: { type: String },
    date: { type: Date },
    time: { type: String },
    status: { type: String, default: 'Incomplete' },
    tag: { type: String}
});

module.exports = mongoose.model('todos', todoSchema);