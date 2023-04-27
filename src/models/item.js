const mongoose = require('mongoose');
const validator = require("validator");

// creating Schema for Tasks
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
       
       
    },
    date: {
        type: Date,
        required: true
    }
});


const Task = mongoose.model('Task', taskSchema);

// exporting the Schema
module.exports = Task;