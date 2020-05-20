const SecretShareGenerator = require('./SSS.js').SecretShareGenerator;
const prompt = require('prompt-sync')({sigint: true});


const byteArray = prompt('Enter Secret Key: ');
let shares = [[],[],[],[]]

for(let i=0; i<byteArray.length; i++){
	let t = new SecretShareGenerator(byteArray[i]);
	finalPoints = t.createFinalPoints();
	for(let j=0; j<4; j++){
		shares[j][i]=finalPoints[j];
	}
}


console.log(shares);

// let a = new SecretShareGenerator("t");
// console.log(a.finalPoints)