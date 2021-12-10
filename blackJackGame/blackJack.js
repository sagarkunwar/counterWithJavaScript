let cards = [];
let sum = 0;
let hasblackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el"); // doing getElementBy id that is given in html file
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
console.log(sumEl);
let cardsEl = document.getElementById("card-el");

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = [firstCard + secondCard];

  // startGame is calling another function which is renderGame
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards : ";
  // in renderGame if else(conditon) is given to
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  console.log("hey you just clicked the start button");
  if (sum <= 20) {
    // checking if sum is less than or equal to 20 then player is still in game
    message = "Do you want ot DRAW A NEW CARD? ";
    isAlive = true; // checking weather player is still in game or not
  } else if (sum === 21) {
    // checking  if sum of two cards are equal 21 then player won the game
    message = "Wohoo! You've got Black Jack";
    hasblackJack = true; // checking weather player has blackJack or not
  } else {
    message = "Sorry you are out of the game"; // if above given condition isnot true then this should run
  }
  messageEl.textContent = message; // printing the message that should be displayed players

  sumEl.textContent = "Sum : " + sum; // showing the sum of two number to players
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 12) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }

  //============================================================================================
  // // up given expression can also be done like given bellow

  // let randomCards = Math.random() * 22;
  // let cards = Math.floor(randomCards);
  // return cards;
  // ============================================================================
}

function newCard() {
  console.log("Drawing a new acard from the deck !! ");

  // new creating the new card when the New cards is clicked
  let card = getRandomCard();

  // now adding that card in sum of the cards
  sum += card;
  cards.push(card);
  console.log(cards);
  // now after adding new card with sum then call again start game
  renderGame();
}
