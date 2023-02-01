// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

// 나눈 배열의 첫 번째를 제외한 배열을 for 문으로 각각의 테스트 케이스에, 
for(let i = 1; i <= inputData[0]; i++) {
    // split 메서드를 이용해 A와 B를 공백 기준으로 분리 해주고,
    let num = inputData[i].split(' ').map(Number);
    // A와 B를 더한 값을 출력해준다.
    console.log(num[0] + num[1]);
}
