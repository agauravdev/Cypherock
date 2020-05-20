
/**
 * Generates a table head
 * @class LagrangeInterpolation
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @param {Coordinates} 2 pairs of target points (x1, y1, x2, y2)
 * @return {object}
 */

var LagrangeInterpolation = function(x1, y1, x2, y2) {
	
	this.xs = [x1, x2];
	this.ys = [y1, y2];
	this.ws = [];
	this.recalcBarycentricWeights();
}

/**
 * Recalculate barycentric weights.
 * @method recalcBarycentricWeights
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 */
LagrangeInterpolation.prototype.recalcBarycentricWeights = function() {
	var k = this.xs.length;
	var w;
	
	for (var j = 0; j < k; ++j) {
		w = 1;
		for (var i = 0; i < k; ++i) {
			if (i != j) {
				w *= this.xs[j] - this.xs[i];
			}
		}
		this.ws[j] = 1/w;
	}
}

/**
 * Calculate a0;
 * @method valueOfCoef
 * @author Gaurav Agarwal <gauravggg21@gmail.com>
 * @return {Integer} value of the constant in the polynomial
 */
LagrangeInterpolation.prototype.valueOfCoef = function() {
	var a = 0;
	var b = 0;
	var c = 0;
	
	for (var j = 0; j < this.xs.length; ++j) {
		if (this.xs[j] != 0) {
			a = this.ws[j] / (0 - this.xs[j]);
			b += a * this.ys[j];
			c += a;
		} else {
			return this.ys[j];
		}
	}
	
	return b / c;
}

module.exports = {LagrangeInterpolation:LagrangeInterpolation};
// var equation = new LagrangeInterpolation(1,9285275391624,2,27078320587385,3,53079135586964);
// console.log(equation.valueOfCoef());