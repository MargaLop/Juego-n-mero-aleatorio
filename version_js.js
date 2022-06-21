const prompt = require('prompt-sync')();
var numGame = Math.floor(Math.random() * 11)+ 1;


while(true){
    var numPlayer =  prompt('¿cual es el número?');
    if (numPlayer < numGame){
        console.log('El número es mayor');
    } else if (numPlayer > numGame) {
        console.log('El número es menor');
    } else {
        console.log('ENOHORABUENA! GANASTE');
        break;
    }
    console.log(numGame)
};
