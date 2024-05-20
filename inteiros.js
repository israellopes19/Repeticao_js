var entrada = require ("readline-sync");

var numero = 0;
var par = 0;
var impar = 0;

   
for(var i=0; i<10; i++){
    var numero=parseInt(entrada.question('Digite um numero: '));

    if(numero%2 === 0){
        par++;
    }else{
        impar++;
    }
}
   console.log('Quantudade de números pares:', + par ,'e a quantidade de impares:' +impar);
  