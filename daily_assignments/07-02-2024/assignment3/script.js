let rand_num,
  guess_num,
  play,
  r_num = 1;
round_score = [];

function playRound(r_num) {
  let tries = 0;
  rand_num = parseInt(Math.random() * 100);
  alert("Round " + r_num + " begins");
  guess_num = prompt("Enter your guess between 1 and 100");

  tries++;

  while (guess_num != rand_num) {
    compare();
    tries++;
  }
  if (guess_num == rand_num) {
    play = congratsMessage(rand_num, tries);
  }
  return tries;
}

function compare() {
  if (guess_num > rand_num) {
    guess_num = prompt("You guessed a higher number , enter new guess");
  } else {
    guess_num = prompt("You guessed a lower number, enter new guess");
  }
}

function congratsMessage(rand_num, tries) {
  alert(
    " Congratulations!!! You guessed the number correctly, Number was " +
      rand_num +
      " . Attempts taken to guess number: " +
      tries
  );
  return prompt(
    "Type yes if you want to play again , type no if you don't want to play again."
  );
}

alert("lets start the game");
// rounds iteration
do {
  round_score.push(" R" + r_num + ": " + playRound(r_num));
  r_num++;
} while (play == "yes");

alert("score of each round is: " + round_score);
