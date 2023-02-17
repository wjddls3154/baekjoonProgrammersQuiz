// split 띄어쓰기로 구분
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

// reverse 메서드 이용해서 배열의 값을 뒤집고, join 메서드로 배열을 다시 합쳐주고,
const [a, b] = input.map( a => [...a].reverse().join('') );

// 삼항 연산자 이용해서, 뒤집은 a와 b의 값중 큰 값을 구해준다.
console.log( a > b ? a : b);