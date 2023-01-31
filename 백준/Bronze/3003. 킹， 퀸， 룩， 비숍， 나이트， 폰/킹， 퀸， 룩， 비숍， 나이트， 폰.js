// node.js 의 file system 모듈을 불러온다.
const fs = require('fs');

// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// 그리고, trim() 함수를 통해 공백을 제거한다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.

const chess = [1, 1, 2, 2, 2, 8];  // 체스에 필요한 말의 개수

let answer = input.map((element, index) => {
  return chess[index] - element;  // 체스 각 요소에서 - 입력받은 값의 요소들을 빼준다.
})

console.log(answer.join(' ')) // 출력 값 띄어쓰기라 join 이용해서 표시.