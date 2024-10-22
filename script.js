const suits = ["♠", "♥", "♦", "♣"];
const numbers = ["A", "Q", "K", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// Functions to generate a random suit and number
const getRandomSuit = () => suits[Math.floor(Math.random() * suits.length)];
const getRandomNumber = () => numbers[Math.floor(Math.random() * numbers.length)]


//#region "Random card"
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
//#endregion
//#region "Button"
const button = document.createElement("button");
        button.innerText = "Generar otra carta";
        button.id = "generateButton";
        
        // Añadir el botón al contenedor
        const buttonContainer = document.getElementById("buttonContainer");
        buttonContainer.appendChild(button);
        
        // Añadir evento de clic al botón para generar una nueva carta
        button.addEventListener("click", function() {
            setRandomCard();  // Genera una nueva carta al hacer clic en el botón
        });

// Add event click at the button
button.addEventListener("click", function(){
    setRandomCard(); // Generate new random card
});
//#endregion

//#region "Change width and height"
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");

const updateCardSize = () =>{
    const card = document.getElementById("card");
    const newWidth = widthInput.value;
    const newHeigth = heightInput.value;


    if(newWidth){
        card.style.width = `${newWidth}px`;
    }
    
    if(newHeigth){
        card.style.height = `${newHeigth}px`;
    }

    
}
//#endregion

    widthInput.addEventListener("change", updateCardSize);
    heightInput.addEventListener("change", updateCardSize);

window.onload = function(){
    setRandomCard();
}