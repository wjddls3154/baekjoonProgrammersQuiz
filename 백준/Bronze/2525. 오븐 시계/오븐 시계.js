// node.js 의 file system 모듈을 불러온다.
// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
const inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.


let a = parseInt(inputData[0].split(' ')[0]); // 입력 받은 첫째 줄의 첫 번째 요소
let b = parseInt(inputData[0].split(' ')[1]); // 입력 받은 첫째 줄의 두 번째 요소
let c = parseInt(inputData[1]); // 입력 받은 둘째 줄 요소

// 시간(h)도 분(min) 단위로 변경
hour = Math.floor((a * 60 + b + c) / 60);
min = (a * 60 + b + c) % 60;
if(hour>=24) {
    hour -= 24;
}

console.log(hour, min);
