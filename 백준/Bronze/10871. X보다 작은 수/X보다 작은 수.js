const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// 배열을 2개 만들어야 한다. 왜냐 2줄로 따로 입력받아야 하기 때문.
// split()로 분리시켜서, 배열에 넣어준다.
let arr = input[0].split(" ");  // 첫째 줄 : N과 X
let arr2 = input[1].split(" "); // 둘째 줄 : 수열 A를 이루는 정수 N개
let N = parseInt(arr[0]);  // 수열의 개수 : 정수 N개
let X = parseInt(arr[1]);  // 정수 X 보다 작은 수의 X

 let answer = [];

 for (var i = 0; i < N ; i++) {
   // input[1] 로 받은 수열의 정수 중에서, X보다 작은 수만 출력하게 push.
   if(X > arr2[i]) {
     answer.push(arr2[i]);
   } 
 }
 
// 정수 사이에 공백
 console.log(answer.join(' '));
