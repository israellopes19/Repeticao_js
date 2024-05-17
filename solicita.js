var entrada = require ("readline-sync");

for(var i=0; i<10; i++){
    var numero=parseInt(entrada.question('Digite um numero: '));
if(i%2 == 0){
console.log(`A quantidade de números pares é ${i}`);
}else{
console.log(`A quantidade de números impares é ${i}`);
}
}
