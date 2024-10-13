/** ES6 Module = An external file that contais resable code 
 *              that can be imported into other JavaScript files
 *              Can contain variables, classes, functions ... and more
 *              Introduced as part of ECMAScript 2015 update
 */

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

let r = 10;
console.log(PI);
const circumfernce = getCircumference(r);
const area = getArea(r);
const volume = getVolume(r);

console.log(`${circumfernce}m`);
console.log(`${area}m^2`);
console.log(`${volume}m^3`);

/** synchronous = Executes line by line consecutively in a sequential manner
 *                code that waits for an operation to complete.
 *  asynchronous = Allows multiple operations to be performed concurrently without waiting
 *                Doesn't block the execution flow an allows the program to continue
 *                (I/O) operation , network , rquests, fetching(data)
 *                Handled with: Callback, Promises, Async/Await
 */

function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()},3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);

/** Error = an object that is created to reprsent a problem that occurs
 *          occur often with user input or eatablishing a connection
 *  tyr {} = Enclose code that might potentially caus an error
 *  catch {} = Cathc and handle any thrown erros from try {}
 *  finally {} = (optional) Always executes. Used mostly for clean up ex. close files, close connections, release, resources
 */

try {
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if (divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    const result = dividend /divisor;
    console.log(result);
}

catch(error){
    console.error(error);
}
finally{
    console.log("You have reached the end!")
}