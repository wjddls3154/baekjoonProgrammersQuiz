// ◎
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var num = parseInt(input[0]);
 
var first = 2;  // 2부터 시작한다.
var primes = [];  // 소인수 저장할 배열

// 만약, 0으로 나누어 떨어지면, 나누어서 소인수를 저장하고, 다시 2부터 나누기를 진행한다.
while (true) {
  if (num % first === 0) {
    num = num / first;
    primes.push(first);
    first = 1;
  }
  first++;
  if (first > num) {
    break;
  }
}
 
console.log(primes.join("\n"));