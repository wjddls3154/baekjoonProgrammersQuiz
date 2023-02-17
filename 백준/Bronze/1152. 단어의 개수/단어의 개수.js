// 띄어쓰기 기준으로 나눈다.
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
// 문자열이 공백이면 0을 출력(예외 처리), 문자열이 공백이 아니면 띄어쓰기로 구분한 input의 크기(길이)를 출력한다.
console.log(input[0] === "" ? 0 : input.length);