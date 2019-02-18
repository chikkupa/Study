const config = require("config");
const mongoose = require("mongoose");

mongoose.connect(config.get('mongo_connection'))
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting MongoDB"));

const todoSchema = new mongoose.Schema({
    title : String,
    status : Number
});

const Todo = mongoose.model('Todo', todoSchema);

// To get all the todos from database
async function getTodos(){
    const result = await Todo.find()
                            .select({title : 1, status : 1});
    return result;
}

// To add a todo to the database
async function createTodo(title, status){
    const todo = new Todo({
        title : title,
        status : status
    });

    const result = await todo.save();
    return result;
}

// To get details of a todo
async function getTodo(id){
    if(!mongoose.Types.ObjectId.isValid(id))
        return null;

    const result = await Todo.find({_id : id})
                            .select({title : 1, status : 1})
                            .catch('Todo id not found');
    if(result.length == 0)
        return null;

    return result[0];
}

// To update todo details
async function updateTodo(id, title, status){
    if(!mongoose.Types.ObjectId.isValid(id))
        return null;

    const result = await Todo.findByIdAndUpdate(id, {
        $set : {
            title : title,
            status : status
        }
    });

    if(!result)
        return null;

    return result;
}

// To delete a todo
async function deleteTodo(id){
    if(!mongoose.Types.ObjectId.isValid(id))
        return null;

    const todo = await Todo.findByIdAndDelete(id);

    if(!todo)
        return null;

    return todo;
}

module.exports.getTodos = getTodos;
module.exports.createTodo = createTodo;
module.exports.getTodo = getTodo;
module.exports.updateTodo = updateTodo;
module.exports.deleteTodo = deleteTodo;