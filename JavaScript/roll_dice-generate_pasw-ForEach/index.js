// DICE ROLLER PROGRAM

function rollDice(){
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages")
    const values = [];
    const images = [];

    for (let i = 0; i<numofDice; i++){
        const value = Math.floor(Math.random() *6)+1;
        values.push(value);
        images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join('');
}

// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";
    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    if (length <=0){
        return `(Password length must be at least 1)`;
    }
    if (allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase =  true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                includeLowercase, 
                includeUppercase,
                includeNumbers,
                includeSymbols);
console.log(`Generated password: ${password}`);

// callback = a function that is passed as an argument
//             to another function.
sum(displayPage, 1, 2);

function sum(callback, x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("h1").textContent = result;
}

/** ForEach = method used to iterate over the elements
 *            of an array and apply a specified function (callback)
 *            to each element
 *            array.forEach(callback)
 *            element, index, array are provided
 */

//Example1:
let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(triple)
// numbers.forEach(triple)
numbers.forEach(square)
// numbers.forEach(cube)
numbers.forEach(display)

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
function display(element){
    console.log(element);
}

//Example2:
let fruits = ["apple", "orange", "bannana", "coconut"];

fruits.forEach();
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}


