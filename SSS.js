const LagrangeInterpolation = require('./LagrangeInterpolation.js').LagrangeInterpolation;
/**
 * Generates a Shamir’s Secret Sharing object
 * @class SecretShareGenerator
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @param {Secret key}
 * @return {object}
 */

var SecretShareGenerator = function(secret){
	this.secret = secret;
	this.shares = [];
	this.secretNumber = this.calcSecretNumber();
	this.polynomial = this.createPolynomial();
}

/**
 * Calculate Secret Number;
 * @method calcSecretNumber
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {SecretInteger} value of the string as a number
 */
SecretShareGenerator.prototype.calcSecretNumber = function() {
	let tempHexValue = "";
	for(let i = 0; i<this.secret.length; i++){
		tempHexValue =tempHexValue + this.secret.charCodeAt(i).toString(16);
	}
	return parseInt(tempHexValue,16);
};

/**
 * Create Polynomial;
 * @method createPolynomial
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {PolynomialArray} Array of the polynomial coefficients
 */
SecretShareGenerator.prototype.createPolynomial = function() {
	// of the type a0 + a1*x. 
	return([this.secretNumber, randomInRange()]);
};

/**
 * Caclulate F(x)
 * @method getValue
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {Integer} Get the value of f(x) in the polynomial
 */
SecretShareGenerator.prototype.getValue = function(x) {
	// of the type a0 + a1*x. W
	return(this.polynomial[0] + (x*this.polynomial[1]));
};

/**
 * Create Final Points;
 * @method createFinalPoints
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {PointsArray} All the final points of the shares
 */
SecretShareGenerator.prototype.createFinalPoints = function() {
	let finalPoints = [];
	for(let i =1; i<5; i++){
		finalPoints[i-1] = [i,this.getValue(i)%256];
	}
	return finalPoints;
};


/**
 * Get back secret Integer
 * @method getBackSecretInt
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {SecretInteger}
 */
SecretShareGenerator.prototype.getBackSecretInt = function(x1,y1,x2,y2) {
	var equation = new LagrangeInterpolation(x1,y1,x2,y2);
	return (equation.valueOfCoef());
};

/**
 * Get back secret Key
 * @method getBackSecretKey
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {SecretKey}
 */
SecretShareGenerator.prototype.getBackSecretKey = function(x1,y1,x2,y2) {
	let keyInt = this.getBackSecretInt(x1,y1,x2,y2)
	return String.fromCharCode(keyInt);
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