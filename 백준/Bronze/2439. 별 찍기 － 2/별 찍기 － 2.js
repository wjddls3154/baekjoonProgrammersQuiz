// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const input = require('fs').readFileSync('/dev/stdin').toString();
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

let num = Number(input);

// 첫 번째 for 문 : 줄 바꿈
for (let i = 0; i < num; i++) {
  let star = '';
   
  // 두 번째 for 문 : i와 j 비교하여 값 누적  
  for (let j = num - 1; j >= 0; j--) {
    // i가 j보다 크면 * 누적, i가 j보다 작으면 공백 처리  
    star += j <= i ? '*' : ' ';
  }
  console.log(star);
}
