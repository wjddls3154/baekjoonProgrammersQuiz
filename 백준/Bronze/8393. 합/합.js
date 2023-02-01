// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const input = require('fs').readFileSync("/dev/stdin").toString().trim();
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, trim() 함수를 통해 공백을 제거한다.

let inputNumber = Number(input);  // n의 값

let answer = 0;  // 결과 값

// 1부터 n까지 합 반복문 돌리면서, answer 에 계속 더하면서 저장
for(let i = 1; i<=inputNumber; i++) {
  answer += i;
}

console.log(answer);  // 결과 출력
