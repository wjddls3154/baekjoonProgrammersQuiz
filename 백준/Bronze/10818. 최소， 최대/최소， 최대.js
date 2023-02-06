let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// split 메서드를 사용하여, 줄(\n)을 기준으로 입력값을 나누어줍니다.

let cnt = Number(input[0]);
let integers = input[1].split(' ').map(x => Number(x));
// 그 이후, split 메서드를 한번 더 사용하여, 공백(' ')을 기준으로 한번 더 나누어 줘야 합니다.

let max = integers[0];
let min = integers[0];

// 첫째 줄에 입력해서 주어진 정수를 변수 cnt에 담아서 사용하여, 
// integers 배열에 담긴 값을, for 문을 사용해 둘째 줄의 모든 정수 값과 비교 후,
// 현재 정수의 값이, max 에 저장된 값보다 크면, max 값으로 넣어주고,
// 현재 정수의 값이, min 에 저장된 값보다 작으면, min 값으로 넣어준다.
for (let i = 1; i < cnt; i++) {
    if (max < integers[i]) {
        max = integers[i];
    }
    if (min > integers[i]) {
        min = integers[i];
    }
}

console.log(`${min} ${max}`);
