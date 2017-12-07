const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    title: {type: String ,default: 'unknow'},
    complete: Boolean
});

module.exports = mongoose.model('todo-list',nodeSchema);