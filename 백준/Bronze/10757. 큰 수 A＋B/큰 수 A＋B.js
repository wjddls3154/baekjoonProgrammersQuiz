let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// BigInt 형으로 전환해야 (2^53 - 1) 보다 큰 정수를 표현가능하다.
const A = BigInt(input[0]);
const B = BigInt(input[1]);

let result = A + B;
console.log(result.toString());  
// BigInt를 출력할 때는, toString 으로 문자형으로 바꿔 출력해야, 끝에 n이 붙어서 안나온다.