// node.js 의 file system 모듈을 불러온다.
const fs = require('fs');

// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
const input = fs.readFileSync(0, 'utf8').toString().split(' ');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.

const A = parseInt(input[0]);  // parseInt 로 정수형 변환
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log((A+B)%C);
console.log( ((A%C) + (B%C)) % C );
console.log( (A*B%C) );
console.log( ((A%C) * (B%C)) % C );
