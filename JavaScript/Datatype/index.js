/***  type conversion = change the datatype of a value to another
                (srtings, numbers, booleans) 
***/

// let age = window.prompt("How old are you");
// age = Number();
// age++;

// console.log(age, typeof age);

// let x = "";
// let y = "pizza";
// let z = "0";

// x = Number();
// y = String();
// z = Boolean();

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


/**  Const = a variable that can't tbe changed **/

let pi = 3.14159;
let radius;
let circumference;


// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);


document.getElementById("submit").onclick = function(){
    radius = document.getElementById("text").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("h3").textContent = circumference + "cm."
}
