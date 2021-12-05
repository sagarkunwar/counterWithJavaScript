let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasblackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
console.log(sumEl);
let cardsEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  console.log("hey you just clicked the start button");
  if (sum <= 20) {
    message = "Do you want ot DRAW A NEW CARD? ";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Black Jack";
    hasblackJack = true;
  } else {
    message = "Sorry you are out of the game";
  }
  messageEl.textContent = message;

  sumEl.textContent = "Sum : " + sum;

  cardsEl.textContent = "Cards : " + firstCard + " & " + secondCard;
}

function newCard() {
  console.log("Drawing a new acard from the deck !! ");

  // new creating the new card when the New cards is clicked
  let card = 1;

  // now adding that card in sum of the cards
  sum += card;

  // now after adding new card with sum then call again start game
  renderGame();
}
