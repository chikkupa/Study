const Joi = require('joi');
const express = require('express');
const todoModel = require('../model/todo_model');
const router = express.Router();

router.get("/", async (req, res) => {
    const todos = await todoModel.getTodos();
    res.send(todos);
});

router.post("/", async (req, res) => {
    // Validation
    const { error } = validateTodo(req.body)

    if(error){
        res.status(400).send({
            status : 400,
            message : error.details[0].message
        });
        return;
    }

    const todo = await todoModel.createTodo(req.body.title, req.body.status);
    res.send(todo);
});

router.get("/:id", async (req, res) => {
    const todo = await todoModel.getTodo(req.params.id);

    if(!todo){
        let response = {
            status : 404,
            message : "Todo not found!"
        }
        return res.status(404).send(response);
    }
    res.send(todo);
});

router.put("/:id", async (req, res) => {
    const todo = await todoModel.updateTodo(req.params.id, req.body.title, req.body.status);

    if(!todo){
        let response = {
            status : 404,
            message : "Todo not found!"
        }
        return res.status(404).send(response);
    }
    res.send(todo);
});

function validateTodo(todo){
    // Validation
    const schema = {
        title : Joi.string().min(3).required(),
        status : Joi.number().required()
    }

    return Joi.validate(todo, schema);
}

module.exports = router