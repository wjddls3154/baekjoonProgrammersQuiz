const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n");

input.pop();
// 띄어쓰기 기준으로 구분, 숫자형으로 변환.
const nums = input.map(x => x.split(' ').map(y => +y));

nums.forEach (v => {
  // 만약, 1번째 수가 2번째 수의 약수이면 'factor'를 반환.
  if (v[1] % v[0] == 0) {
    console.log('factor');
  // 만약, 1번째 수가 2번째 수의 배수이면 'multiple'를 반환.
  } else if (v[0] % v[1] == 0) {
    console.log('multiple');
  // 둘 다 아니면, 'neither' 를 반환.
  } else {
    console.log('neither');
  }
})