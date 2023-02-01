// node.js 의 file system 모듈을 불러온다.
const input = require('fs').readFileSync('/dev/stdin').toString();
// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.

const num = Number(input[0]);

// 1부터 9까지
for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
