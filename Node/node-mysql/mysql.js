var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "expenseapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("select * from transaction", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});