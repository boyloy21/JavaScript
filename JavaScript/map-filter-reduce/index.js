/** .map() = accept a callback and applies that function to
 *           each element of an array. then return a new array
 */

//Example1:
const numbers = [1, 2, 3, 5];
// const squares = numbers.map(squares);
// const cubes = numbers.map(cube);

// console.log(numbers);
// function squares(element){
//     return Math.pow(element, 2)
// }

//Example2:
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

/** .filter() = creates a new array by filtering
 *              out elements
 */
//Example1:
let number = [1, 2, 3, 4, 5, 6, 7];
let evenNums = number.filter(isEven);

console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

//Example2:
const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const child = ages.filter(isChild);

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}


/** .reduce() = reduce the elements of an array 
 *              to a single value
 */

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
const getMin = prices.reduce(getMax);

console.log(`$${total.toFixed(2)}`);

function sum(accumlator, element){
    return accumlator + element;
}
function getMax(accumlator, element){
    return Math.max(accumlator, element);
}


/** Function declaration = define a reusable block of code
 *                         that performs a specific task
 */
/** Function expressions = a way to define function as values or variables 
 *  1. Callback in asynchronous operations
 *  2. Higher-Order Functions
 *  3. Closures
 *  4. Event Listeners
*/

const Numbers = [1, 2, 3, 4, 5, 6];
const square = Numbers.map(function(element){
    return Math.pow(element, 2);
});
const cube = Numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNum = Numbers.filter(function(element){
    return element % 2 === 0;
});

const hello = function(){
    console.log("Hello");
}
setTimeout(function() {
    console.log("Goodbye!");
}, 5000);


/** arrow functions = a concise way to write function expressions
 *                    good for simple functions that you use only once
 *                    (parameters) => some code
 */

const Hello = (name, age) => {console.log(`Hello ${name}`)
                             console.log(`You are ${age} years old`)};
Hello("Yun",21);

const Square = number.map((element) => Math.pow(element, 2));
const Cube = number.map((element) => Math.pow(element, 3));
const EvenNums = number.filter((element) => element % 2 == 0);
const Total = number.reduce((accumlator, element) => accumlator + element);

console.log(Total);


/** object = A collection of related properties and /or methods
 *           Can represent real world objects (people, products, places)
 *           object = {key:value, function()}
 */
/** this = reference to the object where This is used
 *          (the object depends on the immediate context)
 *          person.name = this.name
 */

const person1 = {
    firstName: "Yin",
    lastName: "Chheanyun",
    age: 21,
    // job: Web_development,
    isEmployed: true,
    favfood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.lastName}.`)},
    eat: function(){console.log( `${this.lastName} is eating ${this.favfood}`)},
}

const person2 = {
    firstName: "Ang",
    lastName: "Dara",
    age: 15,
    // job: Electrical,
    isEmployed: false,
    favfood: "pizza",
    sayHello: function(){console.log(`Hey! I'm ${this.lastName}.`)},
    eat: function(){console.log( `${this.lastName} is eating ${this.favfood}`)},
}
person1.sayHello();
person2.eat();

/** destructuring = extract values from arrays and objects, 
 *                  then assign them to varaibles in a convenient way
 *                  [] = to perform array destructuring
 *                  {} = to perform object destructuring
 *  ----- EXAMPLE 2 -------
 *  Assign array elements to variables
 */

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job : ${job}`);
}
displayPerson(person1);

/** Constructor = special method for defining the properites and methods of objects */

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car('Ford','Mastrang', 2020, 'Red');

/** class = (ES6 feature) products a more structured and cleaner way to 
 *          work with objects compared to traditional constructor functions
 *          ex: static keyword, encapsulation, inheritance
 */

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Products: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(){
        return this.price + (this.price * saleTax);
    }
}

const saleTax = 0.05;
const product1 = new Product("Shirt", 19.99);

product1.displayProduct();

/** static = keyword that defines properties or method that belong
 *           to a class itself rather than the objects created
 *           from that class (class own anything static, not the objects)
 */

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2*this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius **2
    }
}
console.log(MathUtil.PI)
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    static sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Yun");
const user2 = new User("Patrick");

User.getUserCount();
User.sayHello();

/** inheritance = allows a new class to inherit properites and methods
 *                from on existing class (parent -> child)
 *                helps with code reusability
 */
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
const rabbit = new Rabit();
console.log(rabbit.alive);
rabbit.eat();
rabbit.run();

/** Supper = keyword is used in classes to call the constructor or 
 *           access the propeties and methods of a parent (superclass)
 *           this = this object
 *           super = the parent
 */

class Animals{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of  ${speed}mph`)
    }
}
class Rabbbits extends Animals{
    constructor(name,age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
const rabbits = new Rabbbits("rabbit", 5, 25);
rabbits.run()

/** getter = special method that makes a property readable
 *  setter = special method that makes a property writeable
 *  validate and modify a value when reading/writing a property
*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}
const rectangle = new Rectangle(3,4);
console.log(rectangle.area)

/** nested objects = Objects inside of other objects.
 *                   Allow you to represent more complex data structures
 *                   Child object is enclosed by a Parent objects
 *                
 *  Person{Address{}, ContactInfo{}}
 *  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 */

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const Person1 = new Person("Yin Chheanyun", 21, "88 Paul St.", "Phnom Penh.", "Cambodia")
const person = {
    fullname: "Yin Chheanyun",
    age: 21,
    isStudent: true,
    habbies: ["Football", "Traveling", "Reasearching"],
    address: {
        street: "88 Paul St.",
        city: "Phnom Penh.",
        country: "Cambodia"
    }
}

for(const property in person.address){
    console.log(person.address[property]);
}


/** Array of Objects */
const fruits = [{name: "apple", color: "red", caloriers: 95},
                {name: "orange", color: "orange", caloriers: 45},
                {name: "banana", color: "yellow", caloriers: 105},
                {name: "coconut", color: "white", caloriers: 159},
                {name: "pineapple", color: "yellow", caloriers: 37}
];


/** Fisher-Yates algorithm */
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
function shuffle(array){
    for(let i= array.length - 1; i>0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
shuffle(cards);
console.log(cards)

/** sort() = method used to sort elements ot an array i place.
 *          sorts elements as strings in lexicogrphic order, not alphabetical
 *          lexicographic = (alphabet + numbers + symbols) as strings
 */

let NumBers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
NumBers.sort((a,b) => b - a);
console.log(NumBers);

/** Date objects = Objects that contain values that represent dates and times
 *                  These date objects can be changed and formatted
 */

// Date(year, month, day, hour, minute, second, ms)
const date1 = new Date("2023-12-31");
const date = new Date();

// GET Date
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayofweek = date.getDay();
// SET Date
date.setFullYear(2024);

console.log(year);

/** closure = A function defined inside of another function,
 *            the inner function has access to the variables
 *            and scope of the outer function.
 *            Allow for private variables and state maintenace
 *            used frequently in JS frameworks: React, Vue, Angular
 */
//Example1:
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment, getCount};
}
const counter = createCounter();
//Example2:
function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function descreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, descreaseScore, getScore};
}
const game = createGame();

/** SetTimeout() = function  in Javascript that allows you to schedule
 *                 the execution of a function after an amount of the time (millisecond)
 *                  Times are approximate (varies based on the workload of the JavaScript runtime env.)
 *  setTimeout(callback, delay);
 *  clearTimeout(timeoutId) = can cancel a timeout before it triggers
*/
//Example1:
// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

let timeoutId;
function startTime(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}
function clearTime(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}

