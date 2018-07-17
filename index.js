
var max = 10000;

var serial = require('./serial');

console.log(global);

console.log("Index: " + serial);

var valor1 = new serial();
var valor2 = new serial();

console.log("valor1: " + valor1);
console.log("valor2: " + valor2);
console.log (valor2 == valor1);


