'use strict';

document.addEventListener('DOMContentLoaded', function() {
    btnCheck = document.querySelector('.btn.check');
    btnAgain = document.querySelector('.btn.again');
    numberElement = document.querySelector('.number');  
    messageElement = document.querySelector('.message');
    scoreElement = document.querySelector('.score');
    highscoreElement = document.querySelector('.highscore');
    guessElement = document.querySelector('.guess');

    let minNumber = 1;
    let maxNumber = 20;

    function guessNumber() {
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        numberElement.textContent = randomNumber;
        let newNumber = numberElement.textContent;
        console.log(newNumber);  
    }

    guessNumber();
    
    





















    })
    




