/** Callback Hell = Situation in JavaScript where callbacks
 *                  are nested within other callback to the
 *                  degree where the code is difficult to read.
 *                  old pattern to handle asynchronous functions.
 *                  Use Promises + async/await to avoid Callback Hell 
 */

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
}

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks complete"));
//         });
//     });
// });

/** Promise = An object that manages asynchronous operation.
 *            Wrap a promise object around {asychronous code} 
 *            "I promise to return a value"
 *            PENDING -> RESOLVED  or REJECTED
 *            new Promise((resolve , reject) => {asychronous code})
 *  Do These CHORES IN ORDER
 *  1. Walk the dog
 *  2. Clean the kitchen
 *  3. Take out the trash
 */

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if (dogwalked){
                resolve("You walk the dog 🦮");
            }
            else{
                reject("You didn't walk the dog 🦮");
            }
        },1500);
    });
};
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleankitchen = false;
            if (cleankitchen){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You didn't clean the kitchen 🧹");
            }
        },2500);
    });
};
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakeOut = true;
            if (trashTakeOut){
                resolve("You take out the trash ♻️")
            }
            else{
                reject("You didn't take out the trash ♻️");
            }
        },500);
    });
};

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the task. ")})
//          .catch(error => console.error(error));

/** Async/Await = Async = make a function return a promise
 *                Await = make an async function wait for a promise
 *                Allows yoy write asynchronous code in  a synchronous manner
 *                Async doesn't have resolve or reject parameters
 *                Everthing after await is placed in an event queue
 */

// async function deChores(){

//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
        
//         console.log("You finished all the chores!")
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// deChores();


/** JSON = (JavaScript Object Natation) data-interchange format
 *          Used for exhchanging data between a server and a server and a web application
 *          JSON files {key:value} OR [{}, {}, {}]
 * 
 *          JSON.stringfy() = converts a JS object to a JSON string.
 *          JSON.parse() = converts a JSON string to a JS object
*/

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.isEployed)));


/** fetch = function used for making HTTP requests to fetch resources.
 *          (JSON style data, images, files)
 *          Simplifies asynchronous data fetching in JavaScript and
 *          used for interacting with APIs to retrieve and send
 *          data asynchronously over the web.
 *          fetch(url, {options})
 */

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok){
//             throw new Error("Could not fetch resourc");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
fetchData();
async function fetchData(){

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        console.log(data);
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
