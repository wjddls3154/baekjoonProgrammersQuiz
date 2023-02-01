// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

let total = +input[0];  // 총 금액 : X
let cnt = +input[1];  // 물건의 종류의 수 : N 
let sum = 0;  // 줄마다 각 물건의 가격 a * 개수 b 의 총합이 담겨질 변수

for(let i=2; i<=cnt+1; ++i){
    let newArr = input[i].split(" ").map(x=>Number(x));
    sum += newArr[0] * newArr[1];
}
// price1 과 price 2가 같으면(true) Yes 를 출력. 다르면(false) No 출력
console.log(total === sum ? "Yes" : "No");
