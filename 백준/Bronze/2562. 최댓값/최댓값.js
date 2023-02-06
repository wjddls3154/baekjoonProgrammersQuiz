let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

// max 와 ... 이용해서, 입력받은 값을 하나하나 확인하여 최대값(max)을 구한다.
let max = Math.max(...input);

console.log(max);  // 첫째 줄에, 최대값 출력
console.log(input.indexOf(max) + 1);  
// 둘째 줄에, indexOf 메서드를 이용해서, max(최댓값)가 몇번째 인덱스인지 찾아서 출력인데,
// +1 해주는 이유는, 인덱스는 0부터 시작이고 수는 1번째부터 시작하기때문.