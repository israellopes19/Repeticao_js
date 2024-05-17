var entrada = require ("readline-sync");

var secreto;
var num = 10;

while(secreto!=num){
    secreto = entrada.question('Escolhha o numero secreto de (0/10):');
    if(secreto == num){
        console.log('Você acerto o número!!!');
    }else{
        console.log('Vocé errou tente novamente');
    }

}