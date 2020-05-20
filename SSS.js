


var SecretShareGenerator = function(secret){
	this.secret = secret;
	this.shares = [];
	this.secretNumber = this.calcSecretNumber();
	this.polynomial = this.createPolynomial();
	this.finalPoints = this.createFinalPoints();
}

SecretShareGenerator.prototype.calcSecretNumber = function() {
	let tempHexValue = "";
	for(let i = 0; i<this.secret.length; i++){
		tempHexValue =tempHexValue + this.secret.charCodeAt(i).toString(16);
	}
	return parseInt(tempHexValue,16);
};

SecretShareGenerator.prototype.createPolynomial = function() {
	// of the type a0 + a1*x. 
	return([this.secretNumber, randomInRange()]);
};

SecretShareGenerator.prototype.getValue = function(x) {
	// of the type a0 + a1*x. W
	return(this.polynomial[0] + (x*this.polynomial[1]));
};

SecretShareGenerator.prototype.createFinalPoints = function() {
	let finalPoints = [];
	for(let i =1; i<5; i++){
		finalPoints[i-1] = [i,this.getValue(i)%256];
	}
	return finalPoints;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomInRange() {  
  return Math.floor(
    Math.random() * 256
  )
}

module.exports = {SecretShareGenerator:SecretShareGenerator};