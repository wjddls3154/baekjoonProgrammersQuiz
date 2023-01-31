// node.js 의 file system 모듈을 불러온다.
const fs = require('fs');

// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.
const [a,b] = fs.readFileSync('./dev/stdin').toString().split('\n').map(x=>parseInt(x));
// a와 b 예시 : a: 472, b: 385

let first = b%10; // b의 일의 자리
let ten = Math.floor( (b % 100)/10 ); // b의 십의 자리
let hundred = Math.floor(b / 100); // b의 백의 자리

console.log(a*first); // a와, b의 일의자리 곱하기 (472 x 5)
console.log(a*ten); // a와, b의 십의 자리 곱하기 (472 x 8)
console.log(a*hundred); // a와, b의 백의 자리 곱하기 (472 x 3)
console.log(a*b); // a와 b 곱하기 (472 x 385)
