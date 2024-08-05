

var lock = true;
var score = 0;

let timeoutId;

async function myFunction() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  score = score + randomNumber1;
  score = score - randomNumber2;
  document.querySelector(".score p").innerHTML = score;
  if (score >= 10) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Kazandı!";
    lock = false;
    clearTimeout(timeoutId);
  } else if (score <= -10) {
    document.querySelector("h1").innerHTML = "Player 2 Kazandı! 🚩";
    lock = false;
    clearTimeout(timeoutId);
  } else {
    timeoutId = setTimeout(myFunction, 500);
  }
}
myFunction();
