const config = require('config');
const Joi = require('joi');
const morgan = require('morgan');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const logger = require('./middleware/logger')
const express = require('express');
const app = express();
const courses = require('./routes/courses');
const home = require('./routes/home');

app.set('view engine', 'pug');
app.set('views', './views')

app.use(express.json());
// Form urlencoded forms
app.use(express.urlencoded({extended : true}));
// Serve static files
app.use(express.static('public'));

app.use('/api/courses', courses);
app.use('/', home);

// Check environment of the project
if(app.get('env') === 'development'){
    //Third party library for logging
    app.use(morgan('tiny'));
}

// Configuration
console.log('Configuration Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password')); // Not working

// Debugging
startupDebugger("Startup debugger called!");
dbDebugger("DB debugger called!");

// Middleware function
app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));