// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

let max = Number(input[0]);  // 테스트 케이스 개수
let answer = '';

// 반복문 이용해서, 모든 케이스 더하기
for (let i = 1; i <= max; i++) {
    // split 메서드를 이용해 A와 B를 공백 기준으로 분리 해서 두 정수 받기
    let num = input[i].split(' ');
    // 두 정수 더하고 줄바꿈
    answer += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(answer);
