const SecretShareGenerator = require('./SSS.js').SecretShareGenerator;
const LagrangeInterpolation = require('./LagrangeInterpolation.js').LagrangeInterpolation;
const prompt = require('prompt-sync')({sigint: true});


// const num = prompt('Enter a number: ');
// console.log('Your number + 4 =');
// console.log(Number(num) + 4);



let a = new SecretShareGenerator("t");
console.log(a.finalPoints)