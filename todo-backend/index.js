const config = require('config');
const express = require('express');
const app = express();
const auth = require('./routes/auth')
const todos = require('./routes/todo');
const users = require('./routes/user');

if(!config.get('jwt_private_key')){
    console.error('FATAL ERROR: Environment variable todo_jwt_private_key not set');
    process.exit();
}

// app.use(express.json());
// app.use(express.urlencoded({extended : true}));

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.use('/api/todos', todos);
app.use('/api/users', users);
app.use('/api/auth', auth);

console.log(config.get('name'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));