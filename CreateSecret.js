const LagrangeInterpolation = require('./LagrangeInterpolation.js').LagrangeInterpolation;
const SecretShareGenerator = require('./SSS.js').SecretShareGenerator;

let secrets = [
  [
    [ 2, 63 ],
    [ 2, 239 ],
    [ 2, 217 ],
    [ 2, 82 ],
    [ 2, 55 ],
    [ 2, 164 ]
  ],
  [
    [ 3, 181 ],
    [ 3, 180 ],
    [ 3, 164 ],
    [ 3, 66 ],
    [ 3, 48 ],
    [ 3, 188 ]
  ]
]

let secretKey = "";

for(let i=0; i<secrets[0].length; i++){
	let equation = new LagrangeInterpolation(secrets[0][i][0], secrets[0][i][1], secrets[1][i][0], secrets[1][i][1]);
	let keyInt = Math.round(((equation.valueOfCoef()%256)+256)%256);
	secretKey = secretKey + String.fromCharCode(keyInt);
}

console.log(secretKey);