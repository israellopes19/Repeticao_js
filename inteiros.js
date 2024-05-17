var entrada = require ("readline-sync");

var numero;
var par = 0;
var impar = 0;

   
for(var i=0; i<10; i++){
    var numero=parseInt(entrada.question('Digite um numero: '));
}

for( var i =0; i<=numero; i++ ){
    if(numero%2 === 0){
        par++;
    }else{
        impar++;
    }
}
   console.log('Quantudade de números pares:' + par);
   console.log('Quantidade de números impares:' +impar);