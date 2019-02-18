const express = require('express');
const app = express();
const todos = require('./routes/todo');

app.use('/api/todos', todos);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));