// node.js 의 file system 모듈을 불러온다.
const fs = require('fs');

// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
const inputData = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.

const year = parseInt(inputData[0]);

// 4의 배수이면서 and 100의 배수가 아닐때 윤년 OR 400의 배수일 때 윤년
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
