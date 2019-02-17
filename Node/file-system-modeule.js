const fs = require('fs');

fs.readdir('./', function(error, files){
    if(error){
        console.log('Error: ', error)
    } else {
        console.log(files);
    }
});