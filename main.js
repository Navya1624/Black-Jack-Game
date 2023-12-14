let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let hasBlackJack = false;
let isAlive = false;
let cards = [];
let sum = 0;
let message = "";
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}
function startGame() {
    isAlive = true;
    let firsCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firsCard, secondCard];
    sum = firsCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.innerHTML = "cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " ";
    }
    sumEl.innerHTML = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.innerHTML = message;
}
function newCards() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}
