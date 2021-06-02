const express = require('express');
const router = express.Router();
// const todoModel = require('../model/todo_model');

var Sequelize = require('sequelize');

//Setting up the config
var sequelize = new Sequelize('todo', 'root', '123', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(function() {
    console.log('CONNECTED! ');
  })
  .catch(function(err) {
    console.log('SOMETHING DONE GOOFED');
  })
  .done();

var Todo = sequelize.define(
  'todo',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    time: Sequelize.TIME,
  },
  {timestamps: false, freezeTableName: true}
);

router.get('/', async (req, res) => {
  Todo.findAll()
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.status(400).send(err);
    })
    .done();
});

router.post('/', async (req, res) => {
  var todo = Todo.build({
    title: req.body.title,
    description: req.body.description,
  });

  todo
    .save()
    .then(function(data) {
      res.send({message: 'Item inserted successfully!'});
    })
    .catch(function(err) {
      res.status(400).send(err);
    })
    .done();
});

router.get('/:id', async (req, res) => {
  Todo.findOne({
    where: {
      id: req.params['id'],
    },
  })
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.status(400).send(err);
    })
    .done();
});

router.put('/:id', function(req, res, next) {
  Todo.update(
    {
      title: req.body.title,
      description: req.body.description,
    },
    {
      where: {
        id: req.params['id'],
      },
    }
  )
    .then(function(data) {
      res.send({
        message: 'Item updated successfully!',
      });
    })
    .catch(function(err) {
      res.status(400).send(err);
    })
    .done();
});

router.delete('/:id', function(req, res, next) {
  Todo.destroy({
    where: {
      id: req.params['id'],
    },
  })
    .then(function(data) {
      res.send({
        message: 'Item deleted successfully!',
      });
    })
    .catch(function(err) {
      res.status(400).send(err);
    })
    .done();
});

module.exports = router;
