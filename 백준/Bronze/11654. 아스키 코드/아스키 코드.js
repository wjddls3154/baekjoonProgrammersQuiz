const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

// charCodeAt 이용해서, 입력받은 문자의 아스키코드 값 얻기
const answer = input.charCodeAt();
console.log(answer);