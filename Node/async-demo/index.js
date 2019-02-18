console.log("Before");
// getUser(1, getuser);

console.log("After");

/*function displayCommits(commits){
    console.log("Commits: ", commits);
}

function getrepositories(repo) {
    console.log("Repository: ", repo);
    getCommits(repo, displayCommits);
}

function getuser(user) {
    console.log(user);
    getRepositories(user.username, getrepositories);
} */

/*getUser(1)
    .then((user)=> getRepositories(user.username))
    .then((repo) => getCommits(repo))
    .then((commits) => console.log(commits))
    .catch((err) => console.log('Error: ', err));
    */

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repo = await getRepositories(user.username);
        const commits = await getCommits(repo);

        console.log(commits);
    } catch(err){
        console.log('Error: ', err.message);
    }
}

displayCommits();

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Reading user details");
            resolve({id : id, username : "Chikku P A"});
            // reject(new Error('Error reading user database'));
        }, 2000);
    });
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Reading Repository details")
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Reading commits");
            resolve([{name: "Repo 1"}, {name: "Repo 2"}]);
        }, 2000);
    });
}