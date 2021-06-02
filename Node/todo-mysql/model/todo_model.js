var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'todo',
});

async function getTodoList() {
    connection.connect();
    let response;

    connection.query('SELECT * FROM todo', function(error, results, fields) {
      if (error) throw error; else {
        response = results
      }
    });
  
    connection.end();
    return response;
}

module.exports.getTodoList = getTodoList;