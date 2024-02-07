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


    
   /*function startGame() {

    guessNumber();


   }*/
    

   let randomNumber; // Declara randomNumber fuera de la función
   let enteroNumber;

   function guessNumber(inputNumber) {
       // Verifica si es la primera vez que se llama a la función y genera el número aleatorio
       if (randomNumber === undefined) {
           randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
           enteroNumber = parseInt (randomNumber);
           console.log(randomNumber);
       }
   
       if (inputNumber === enteroNumber) {
           return numberElement.textContent = randomNumber;
       }
   
       if (inputNumber < enteroNumber) {
           messageElement.innerHTML = "El número es mayor!";
           /*alert("El número es mayor!");*/
           
       } else if (inputNumber > enteroNumber) {
           messageElement.innerHTML = "El número es menor!";
           /*alert("El número es menor!");*/
   
       }  else {
           console.log("¡Felicidades! 🍀 Has adivinado el número!");
           messageElement.innerHTML = "¡Felicidades! 🍀 Has adivinado el número!";
           // Reiniciar randomNumber para permitir que se juegue de nuevo
           randomNumber = undefined;
           console.log("randomNumber:", randomNumber); // Añade esta línea para verificar
       }
       
   }
   

        btnCheck.addEventListener('click', function () {
            const inputNumber = parseInt(guessElement.value)
            sendNumber(inputNumber);
        
    });

        btnAgain.addEventListener('click', function () {
        // alert("Again!");
        startGame();
        
});

    function sendNumber(inputNumber) {
        console.log(inputNumber);
        guessNumber(inputNumber)
        
    }

});
