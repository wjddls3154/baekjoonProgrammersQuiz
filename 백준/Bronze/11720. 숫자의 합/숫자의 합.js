let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);  // 첫째 줄에 숫자의 개수
let num2 = input[1].split("");  // 둘째 줄에 숫자 N개 공백없이 주어짐, split으로 구분
let sum = 0;

// 0번인덱스부터 ~ num 
for (let i = 0; i < num; i++) {
    sum += Number(num2[i]);  // num2의 각 인덱스의 숫자 누적해서 더함.
}

console.log(sum);