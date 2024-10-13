/** Array = a variable like structure that can hold more than 1 value */

//Example1:
let fruits = ["apple", "orange", "bannana", "coconout"];
//fruits.push("coconut")
for (let i = fruits.length-1; i>=0 ; i--){
    console.log(fruits[i]);
}

/** spread operator = ... allows an iterable such as an array
 *                    or string to be expanded into seperate elements
 *                    (unpacks the elements)
 */
//Example1:
let nubmers = [1, 2, 3, 4, 5];
let maximum = Math.max(...nubmers);
let minimum = Math.min(...nubmers);

//Example2:
let username = "Yun boyloy";
let letter = [...username];

/** rest parameters = (...rest) allow a function work with a variable
 *                     number of argument by bunding them into an array
 */

//Example1:
function openFridge(...foods){
    console.log(foods);
}
function combineString(...strings){
    return strings.join(" ");
}

const fullform = combineString("Mr.", "Neymar", "football", "at", "Paris", "saint", "gemain");
console.log(fullform);