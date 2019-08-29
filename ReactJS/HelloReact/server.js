var express = require("express");

var app = express();

app.use(express.static('public'));

app.listen(3300, function(){
    console.log("Server running @ 3300");
});