var randomNumber1 = Math.floor(Math.random() * 7);

var randomNumber2 = Math.floor(Math.random() * 7);

var diceOne =  document.getElementsByClassName('img1')[0];

var diceTwo = document.getElementsByClassName('img2')[0];

var WinText = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
WinText.innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber2 == randomNumber1){
    WinText.innerHTML = "Draw!";
}
else {
    WinText.innerHTML = "Player 2 wins! 🚩"
}



switch (randomNumber1) {
    case 1:
        diceOne.setAttribute("src", "images/dice1.png");
      break;
    case 2:
        diceOne.setAttribute("src", "images/dice2.png");
      break;
    case 3:
        diceOne.setAttribute("src", "images/dice3.png");
      break;
    case 4:
        diceOne.setAttribute("src", "images/dice4.png");
      break;
    case 5:
        diceOne.setAttribute("src", "images/dice5.png");
      break;
    case 6:
        diceOne.setAttribute("src", "images/dice6.png");
  }

  switch (randomNumber2) {
    case 1:
        diceTwo.setAttribute("src", "images/dice1.png");
      break;
    case 2:
        diceTwo.setAttribute("src", "images/dice2.png");
      break;
    case 3:
        diceTwo.setAttribute("src", "images/dice3.png");
      break;
    case 4:
        diceTwo.setAttribute("src", "images/dice4.png");
      break;
    case 5:
        diceTwo.setAttribute("src", "images/dice5.png");
      break;
    case 6:
        diceTwo.setAttribute("src", "images/dice6.png");
  }