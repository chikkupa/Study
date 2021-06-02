const express = require('express');
const todos = require('./routes/todo');

const app = express();

app.get('/', (req, res) => {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'todo',
  });

  connection.connect();

  connection.query('select * from todo', function(error, results, fields) {
    if (error) {
      res.status(400).send({
        status: 400,
        message: error.details[0].message,
      });
      return;
    } else {
      res.send(results);
    }
    console.log('The solution is: ', results);
  });

  connection.end();
});

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/todos', todos);

// console.log(config.get('name'));
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Listening on port ${port}!`));
