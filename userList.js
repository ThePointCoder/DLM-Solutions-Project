/* Ennek a JavaScript filenak a szerepe  hogy a felhasználói adatokat a böngésző tárolójába mentsem, amelyek 
    innen egy másik oldalra lépve ki lesznek listázva. Az adatgyüjtő box alatt megjelennek az adatkártyák de a szerepük
    csak annyi hogy ellenőrizhetőek rajta sorban, vizuálisan is a mentett falhasználók*/

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let button = document.getElementById("button");
let close = document.getElementsByTagName("img");
let cardList = document.getElementById("cardList");
let counter = 0;

button.addEventListener("click", function() {

    localStorage.setItem("name" + counter, userName.value);
    localStorage.setItem("email" + counter, userEmail.value);
    localStorage.setItem("phone" + counter, userPhone.value);
    localStorage.setItem("counter", counter);
    counter += 1;

    let box = document.createElement("div");
    box.setAttribute("class", "cards");
    cardList.appendChild(box);
    
    let nameLine = document.createElement("p");
    box.appendChild(nameLine);
    let nameValue = document.createTextNode("Felhasználó neve: " + userName.value);
    nameLine.appendChild(nameValue);

    let emailLine = document.createElement("p");
    box.appendChild(emailLine);
    let emailValue = document.createTextNode("Email címe: " + userEmail.value);
    emailLine.appendChild(emailValue);

    let phoneLine = document.createElement("p");
    box.appendChild(phoneLine);
    let phoneValue = document.createTextNode("Telefon száma: " + userPhone.value);
    phoneLine.appendChild(phoneValue);
});
let cards = document.getElementsByClassName("cards");