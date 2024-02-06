let rand_num, guess_num, play;
do {
  let tries = 0;
  rand_num = parseInt(Math.random() * 100);
  alert("Lets start the guessing game");
  guess_num = prompt("Enter your guess between 1 and 100");
  tries++;

  while (guess_num != rand_num) {
    if (guess_num > rand_num) {
      guess_num = prompt("You guessed a higher number , enter new guess");
      tries++;
    } else {
      guess_num = prompt("You guessed a lower number, enter new guess");
      tries++;
    }
  }
  if (guess_num == rand_num) {
    alert(
      " Congratulations!!! You guessed the number correctly, Number was " +
        rand_num +
        " . Attempts taken to guess number: " +
        tries
    );
    play = prompt(
      "Type yes if you want to play again , type no if you don't want to play again."
    );
  }
} while (play == "yes");
