// node.js 의 file system 모듈을 불러온다.
// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
const inputData = require("fs").readFileSync(0).toString().split('\n');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.

// x와 y를 입력받는다.
const [x, y] = inputData;

// 만약, x와 y가 둘 다 양수이면 1을 반환, x는 양수이고 y는 음수이면 4를 반환
if(x > 0) y > 0 ? console.log(1) : console.log(4);
if(x < 0) y > 0 ? console.log(2) : console.log(3);
// 만약, x는 음수이고 y가 양수이면 2를 반환, x와 y가 둘 다 음수이면 3을 반환
