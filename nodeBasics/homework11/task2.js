async function getTodo(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response =>{
            console.log("Status code of 'getTodo' response: " + response.status);
            return response;
        });

        const result = await response.json()
        .then(result => {
            console.log(result);
        });
        return result;
    }

    catch(error){
        console.log("Something went wrong with getTodo fetch request" + error.message);
    }
}

async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            console.log("Status code of 'getUser' response: " + response.status);
            return response;
        })

        const result = await response.json()
        .then(result => {
            console.log(result);
        });
        return result;   
    }
    catch(error){
        console.log("Something went wrong with getUser fetch request" + error.message);
    }
}

async function getAllPromisesResult(){
    try{
        const promises = [getTodo(), getUser()];
        const result = await Promise.all(promises);
        console.log("Promise.all has finished successfully!");
        return result;
    }
    catch(error){
        console.error("Something went wrong with getAllPromisesResult()" +  error);
    }
}

async function getRacePromisesResult(){
    try{
        const promises = [getTodo(), getUser()];
        const result = await Promise.race(promises);
        console.log("Promise.race has finished successfully!");
        return result;
    }
    catch(error){
        console.error("Something went wrong with getRacePromisesResult()" +  error);
    }
}

const resultAll = await getAllPromisesResult();
const resultRace = await getRacePromisesResult();