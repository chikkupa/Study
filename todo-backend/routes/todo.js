const express = require('express');
const todoModel = require('../model/todo_model');
const router = express.Router();

router.get("/", async (req, res) => {
    const todos = await todoModel.getTodos();
    res.send(todos);
});

module.exports = router