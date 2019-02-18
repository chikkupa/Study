const config = require('config');
const express = require('express');
const app = express();
const todos = require('./routes/todo');

app.use(express.json());

app.use('/api/todos', todos);

console.log(config.get('name'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));