/** .checked = property that deternies the checked state of an 
            HTML checkbox or radio button element */

const CheckBox = document.getElementById("checkbox");
const Visa = document.getElementById("visa");
const MasterCard = document.getElementById("card");
const Paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    
    if (CheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are NOT subscribed";
    }

    if (Visa.checked){
        paymentResult.textContent = "You are paying with Visa";
    }
    else if (MasterCard.checked){
        paymentResult.textContent = "You are paying with MasterCard.";
    }
    else if (Paypal.checked){
        paymentResult.textContent = "You are paying with PayPal.";
    }
    else{
        paymentResult.textContent = "You must select a payment type."
    }
}

/** ternary operator = a shorcut to if{} and else{} statements
 *                     helps to assign a variable based on a condition
 *                     condition ? codeIfTrue : condeIfalse;
 */

let age = 21;
let message = age >= 18 ? "You're an adult" : "You'r a minor"
console.log(message);

let purchaseAmount = 101;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

/** SWITCH = can be an efficient replacement to many else if statements */

let day = 1;

switch(day){
    case 1:
        console.log("It is Moday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 6:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}


/** String Methods = allow you to manipulate and work text (strings) */

let userName = "Yunboyloy";

userName.charAt(0);
userName.indexOf("n");
userName.length;
userName.trim();
userName.toUpperCase();

let phoneNumber = "088-847-9300";
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);

/** Sting slicing = creating a subsring from a portion of another
 *                  string string.slice(start, end)
 */

const fullName = "Yun boyloy";
let firtName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);
let FirstName = fullName.slice(0, fullName.indexOf(" "));
let LastName = fullName.slice(fullName.indexOf(" ")+1);
const email = "yun@gmail.com";
let username = email.slice(0, email.indexOf("@"));

/** Method Chaning = Calling one method after another in one
 *                   continuous line of code.
 */
// ---- NO METHODE CHANING -----

let UserName = window.prompt("Enter your username:");

UserName = UserName.trim();
let letter = UserName.charAt(0);
letter = letter.toUpperCase();

let extraChars = UserName.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;


// ---- Methode CHANING ---//
UserName = UserName.trim().charAt(0).toUpperCase() + UserName.trim().slice(1).toLocaleLowerCase();
