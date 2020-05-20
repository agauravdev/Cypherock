const inter = require('./LagrangeInterpolation.js').LagrangeInterpolation;

var equation = new inter(1,9285275391624,2,27078320587385,3,53079135586964);
console.log(equation.valueOfCoef());