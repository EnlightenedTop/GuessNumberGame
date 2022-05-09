'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
};

const displayNumberStyle = function(numberStyle) {
    document.querySelector('.number').style.width = numberStyle;
};

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
};

const displayBodyColor = function(color) {
    document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //When there is no input
    if (!guess) {
        //
        displayMessage('⛔ No number!');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');

        displayBodyColor('#60b347');

        displayNumberStyle('30rem');

        displayNumber(secretNumber);
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉 Too low!');
            score--;

            displayScore(score);
        } else {
            displayMessage('💥You lost the game!');
            displayScore('0');
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.floor(Math.random() * 20) + 1;

    displayBodyColor('#222');
    displayNumberStyle('15rem');
    displayNumber('?');
    displayMessage('Start guessing...');
    score = 20;

    displayScore(score);
    document.querySelector('.guess').value = null;
});