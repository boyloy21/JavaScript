/** NodeList = Static collection of HTML element by (id, class, element)
 *             can be created by using querySelectorAll()
 *             Similar to an array, but no (map, filter, reduce)
 *             Nodelist won't update to automatically reflect changes
 */
let buttons = document.querySelectorAll(".myBtn");

// ADD HTML/CSS Properties
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😛";
// });

// Click event listener
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "red";
//     });
// });

// Mouseover + Mouseout event listener
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

// Add an element
// const newButton = document.createElement("button"); //Step1
// newButton.textContent = "Button 5"; // Step2
// newButton.classList = "myBtn";
// document.body.appendChild(newButton); // Step3

// // // Remove an element
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         button = document.querySelectorAll(".myBtn");
//     });
// });

/** ClassList = Element property in JavaScript used to interact
 *              with an element's list of classes (css classes)
 *              Allows you to make reusable classes for many elements
 *              across your webpage.
 *  add()
 *  remove()
 *  toggle(Remove if present, Add if not)
 *  replace(oldClass, newClass)
 *  contains()
 * 
*/

// const myH1 = document.getElementById("myH1");
// const myButton2 = document.getElementById("myBtn2");
// myH1.classList.add("enabled");
// myButton2.classList.add("enabled");
// myButton2.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")){
//         event.target.textContent += "👹";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

buttons.forEach(button => {
    button.classList.add("enabled");
});
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "👹";
        }
        else{
            event.target.classList.replace("enabled", "disabled")
        }
    });
});

