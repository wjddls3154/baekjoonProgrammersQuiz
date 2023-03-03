// ◎
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const num = input.shift();
let answer = [];

for (let i = 0; i <= num; i++) {
  // num 을 i로 나누었을 때, 나머지가 0이면 answer에 push한다
  if (num % i === 0) answer.push(i)
}

if (answer.length >= input[0]) {
  console.log(answer[input[0] - 1]);
} else {
  // 만일 N의 약수의 개수가 K개보다 적어서, K번째 약수가 존재하지 않을 경우에는 0을 출력
  console.log(0);
}