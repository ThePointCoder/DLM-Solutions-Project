let counter = localStorage.getItem("counter");
let cardList = document.getElementById("cardList");
let instance;

// Itt kiiratom kártya formában a localStorageba előzőleg eltárolt adatokat

for (let i = 0;i <= counter; i++){

    let box = document.createElement("div");
    box.setAttribute("class", "cards");
    cardList.appendChild(box);

    let reMove = document.createElement("img");
    reMove.setAttribute("src", "times-circle-solid.svg");
    reMove.setAttribute("class", "del");
    box.appendChild(reMove);

    let edit = document.createElement("img");
    edit.setAttribute("src", "pen-square-solid.svg");
    edit.setAttribute("class", "modify");
    box.appendChild(edit);

    let nameLine = document.createElement("p");
    box.appendChild(nameLine);
    let nameValue = document.createTextNode("Felhasználó neve: " + localStorage.getItem("name" + i));
    nameLine.appendChild(nameValue);

    let emailLine = document.createElement("p");
    box.appendChild(emailLine);
    let emailValue = document.createTextNode("Email címe: " + localStorage.getItem("email" + i));
    emailLine.appendChild(emailValue);

    let phoneLine = document.createElement("p");
    box.appendChild(phoneLine);
    let phoneValue = document.createTextNode("Telefon száma: " + localStorage.getItem("phone" + i));
    phoneLine.appendChild(phoneValue);

    let cards = document.getElementsByClassName("cards");
    let del = document.getElementsByClassName("del");
    let modify = document.getElementsByClassName("modify");

/* Az eltávolító gomb törli a kártyát és az azzal összefüggő adatokat, a kártyák száma kevesebb lesz 
    ezért új kiiratáskor az átrendeződött adatok közt null értékű kártya jelenhet és valid adatú kártya 
    nem jelenik meg, ezen még dolgoznom kellene egy rendező algoritmussal*/ 

    del[i].addEventListener("click", function () {
        cards[i].remove();
        counter = counter - 1;
        localStorage.removeItem("name" + i);
        localStorage.removeItem("email" + i);
        localStorage.removeItem("phone" + i);
        localStorage.setItem("counter", counter);

    });

/* Az alábbi szerkesztő-eseménykezelő új inputokat, kitöltő sávokat adna minden kártyához, 
    amelyekkel módosíthatóak lennének az eredeti adatok és utánna egyszerű enter lenyomással módosulna,
    azaz beírná az új adatot a localStorage-ba  */

    modify[i].addEventListener("click", function (){

            let useR = document.createElement("input");
            useR.setAttribute("type", "text");
            useR.setAttribute("class", "inputS");
            cards[i].appendChild(useR);
            let userInput = document.getElementsByClassName("inputS");
            userInput[i].addEventListener("input", function(){
                localStorage.setItem("name" + i, userinput[i].value);
            });

            let emaiL = document.createElement("input");
            emaiL.setAttribute("type", "text");
            emaiL.setAttribute("class", "inputS");
            cards[i].appendChild(emaiL);

            let phonE = document.createElement("input");
            phonE.setAttribute("type", "text");
            phonE.setAttribute("class", "inputS");
            cards[i].appendChild(phonE);
    });
}