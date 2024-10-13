// If STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

// let isStudent = true;
// let hasLicense = false;
// let age = 21;
// let Age = 101;
// if (isStudent){
//     console.log("You are a Students");
// }
// else {
//     console.log("You are not a student.")
// }

// if (age >= 16){
//     console.log("You are old enough to drive");
//     if (hasLicense){
//         console.log("You have your license.")
//     }
// }
// else {
//     console.log("You are young enough to drive");
// }

const AgeValue = document.getElementById("text");
const Submit = document.getElementById("submit");
const resultElement = document.getElementById("resultElement");
let age = 0;

Submit.onclick = function(){
    age = AgeValue.value;
    age = Number(age);
    if (age >= 100){
        resultElement.textContent = "You are TOO OLD to enter this site";
        
    }
    else if(age == 0){
        resultElement.textContent = "You can't enter. You were just born.";
    }
    else if (age >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if (age < 0){
        resultElement.textContent = "Your age can't be below 0";
    }
    else{
        resultElement.textContent = "You must be 18 increase to enter this site";
    }
}


/** Logical Operators = used to combine or manipulate booleans values
 *                      (true of false)
 *                      AND = &&
 *                      OR = ||
 *                      NOT = !
 */


/** = assignment operator
 *  == comparison operator (compare if values are equal)
 *  === strict equality (compare if values & datatype are equal)
 *  != inequality operator
 *  !== strict inequality operator
 */

/** While loop = repeat some code WHILE some condition is true */

//Example1:
// let username;
// while(username == "" || username === null){
//     username = window.prompt(`Enter your name`);
// }
//OR
// do{
//     username = window.prompt(`Enter your name`)
// }while(username == "" || username === null)

// console.log(`Hello ${username}`)

//Example2:
// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt('Enter your username');
//     password = window.prompt('Enter your password');

//     if (username === "myUsername" && password == "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.error("Invalid credentials! Please try again");
//     }
// }


/** For loop = repeat some code a LIMITED amount of times */

//Example1:
// for(let i = 0; i<=20; i++){
//     if (i == 13){
//         break;
//     }
//     else {
//         console.log(i)
//     }
// }