const suits = ["♠", "♥", "♦", "♣"];
const numbers = ["A", "Q", "K", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// Functions to generate a random suit and number
const getRandomSuit = () => suits[Math.floor(Math.random() * suits.length)];
const getRandomNumber = () => numbers[Math.floor(Math.random() * numbers.length)]


// Asign a random suit at the card
const setRandomCard = () => {

    const suitUp = document.getElementById("suitUp");
    const suitDown = document.getElementById("suitDown");
    const number = document.getElementById("number");

    const randomNumber = getRandomNumber();
    const randomSuit = getRandomSuit();

    //Update suits
    suitUp.textContent = randomSuit;
    suitDown.textContent = randomSuit;
    number.textContent = randomNumber;

    if (randomSuit === "♥" || randomSuit === "♦") {
        suitUp.classList.add("red"); 
        suitDown.classList.add("red"); 
        number.classList.add("red");
    }
}


window.onload = function(){
    setRandomCard();
}