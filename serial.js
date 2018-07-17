
var max = 10000;

console.log("teste")

this.generate = function(){
	return Math.floor(Math.random()*max);
};

console.log("serial: "+ this.generate());
