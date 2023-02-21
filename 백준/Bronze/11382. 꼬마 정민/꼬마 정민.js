const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

// 배열 안의 숫자 모두 더해서 출력.
let answer = input.reduce( (x, y) => x + y);
console.log(answer);