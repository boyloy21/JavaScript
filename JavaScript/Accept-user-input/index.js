// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let Username;

// username = window.prompt("What's your username?");
// console.log(Username);

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("h1").textContent = `Hello ${username}`
}