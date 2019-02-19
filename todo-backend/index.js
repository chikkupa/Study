const config = require('config');
const express = require('express');
const app = express();
const todos = require('./routes/todo');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/todos', todos);

console.log(config.get('name'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));