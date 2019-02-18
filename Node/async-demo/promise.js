const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve({message: "Testing"});
        reject(new Error('Database error'));
    }, 2000);
});

p
    .then(response => console.log(response))
    .catch(err => console.log(err.message));