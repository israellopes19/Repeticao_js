var entrada = require ("readline-sync");

var escolha;

while(escolha!='N'){
    escolha=entrada.question('Escolha um valor (S/N):').toUpperCase();
    if(escolha=='S'){
        console.log('Você decidiu continuar!');
    }else if(escolha=='N'){
        console.log('Você saiu!');
    }else{
        console.log('Você digitou errado, digite um valor entre (S/N)')
    }
}