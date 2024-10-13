// Math = built-in object that provides a
//        colleection of properties and methods

let x = 3;
let y = 2;
let z;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x,y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);

// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);

// console.log(max);
// console.log(min);

// let randomNum = math.floor(Math.random() *100) +1;

// console.log(randomNum);

const myButton = document.getElementById("btn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent =randomNum1;
    label2.textContent =randomNum2;
    label3.textContent =randomNum3;
}


