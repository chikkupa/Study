const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo-project")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting MongoDB"));

const todoSchema = new mongoose.Schema({
    title : String,
    status : Number
});

const Todo = mongoose.model('Todo', todoSchema);

async function getTodos(){
    const result = await Todo.find();
    return result;
}

module.exports.getTodos = getTodos;