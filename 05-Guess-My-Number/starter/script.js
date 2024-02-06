'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const btnCheck = document.querySelector('.btn.check');
    const btnAgain = document.querySelector('.btn.again');
    const numberElement = document.querySelector('.number');  
    const messageElement = document.querySelector('.message');
    const scoreElement = document.querySelector('.score');
    const highscoreElement = document.querySelector('.highscore');
    const guessElement = document.querySelector('.guess');

    let minNumber = 1;
    let maxNumber = 20;

    function guessNumber(inputNumber) {
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        numberElement.textContent = randomNumber;
        console.log(randomNumber);  

        if (inputNumber < randomNumber) {
            return alert("El número es mayor!");

        } else if (inputNumber > randomNumber) {
            return alert("El número es menor!");

        } else {
            return alert("Congratulations!!🍀")
        };
}
        btnCheck.addEventListener('click', function () {
            const inputNumber = parseInt(guessElement.value)
            sendNumber(inputNumber);
        
    });

        btnAgain.addEventListener('click', function () {
        // alert("Again!");
        
        
    
});

    function sendNumber(inputNumber) {
        console.log(inputNumber);
        guessNumber(inputNumber)
        
    }

});
