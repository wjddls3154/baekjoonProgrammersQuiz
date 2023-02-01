// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const input = require('fs').readFileSync('/dev/stdin').toString();
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

let star = "";  // 별

// 반복문 이용해서, 계속 star 에 누적해서 n번째 줄에 별 n개 찍기
for (let i = 0; i < input; i++) {
    star += "*";
    console.log(star);
}
