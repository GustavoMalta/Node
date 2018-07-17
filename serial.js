var createSerial = function(){

	var max = 10000;

	console.log("teste")

	this.generate = function(){
		return Math.floor(Math.random()*max);
	};

};


module.exports = createSerial;

