/**  element selectors = Methods used to target and manipulate HTML elements
 *                       They allow you to select one or multiple HTML elements
 *                       from the DOM(Document object Model)
 *  1. Document.getElementbyId()  // Element of Null
 *  2. Document.getElementClassName() // HTML Collection
 *  3. Document.getElementByTagName() // HTML Collection
 *  4. Document.querySelector() // Element or Null
 *  5. Document.querySelectorAll() // Modelist
 * 
*/           





/** DOM Navigatiion = The process of navigating through the structure
 *                    of an HTML document using javascript.
 *  . ChangefirstElementChild
 *  .lastElementChild
 *  .nextElementSibling
 *  .previousElementSibling
 *  .parentElement
 *  .children
 */

// ------ .firstElementChild ------
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

// ------ .firstElementChild ------
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";
const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElements => {
//     const lastChild = ulElements.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// })

// //  ------ .nextElementSibling --------
const element_car = document.getElementById("carrot");
const nextSibling = element_car.nextElementSibling;
nextSibling.style.backgroundColor = "green";

// // ---- .previousElementSibling ------
const element_ora = document.getElementById("banana");
const prevSibling = element_ora.previousElementSibling;
prevSibling.style.backgroundColor = "blue";

// // ------ .parentElement ------
const element_cak = document.getElementById("cake");
const parent = element_cak.parentElement;
parent.style.backgroundColor = "yellow";

// // ------- .children -----
// const element_de = document.getElementById("desserts");
// const children = element_de.children;
// children[0].style.bacgroundColor = "yellow";
// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "red";
// }) ;


/** Add and */
// ----- Example1 <h1> -----

// Step 1 create the element
const newH1 = document.createElement("h1");
//Step 2 Add Atiributes/Properties
newH1.textContent = "I like pizza";
newH1.id = "H1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// Step 3 Append element to Dom
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);

// REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1);

//----- Example 3 <li> ----
// const newListItem = document.createElement("li");
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen"
// document.getElementById("fruits").append(newListItem);
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2]);

/** Eventlistener = Listener for specific events to create interactive web pages
 *                  events: click, mouseover, mouseout, keydown, keyup
 *                  .addEventListener(event, callback);
 */

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("btn");
myButton.addEventListener("click", event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});
myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 🤐 ";
});
myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "click Me 🤫";
});

const Box = document.getElementById("Box");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",event => {
    Box.textContent = "😲";
    Box.style.backgroundColor = "tomato";
});
document.addEventListener("keyup",event => {
    Box.textContent = "😁";
    Box.style.backgroundColor = "lightblue";
});
document.addEventListener("keydown", event => {
    // console.log(event.key);
    if (event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        Box.style.top = `${y}px`;
        Box.style.left = `${x}px`;
    }
});


/** Hide and Show */
const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

myBtn.addEventListener("click", event => {

    if (myImg.style.visibility == "hidden"){
        myImg.style.display = "visible";
        myBtn.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myBtn.textContent = "Show";
    }
});


