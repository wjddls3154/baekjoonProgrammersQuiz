// node.js 의 file system 모듈을 불러온다.
const fs = require('fs');

// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const input = fs.readFileSync("/dev/stdin").toString().trim();
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, trim() 함수를 통해 공백을 제거한다.

console.log(parseInt(input) - 543);
