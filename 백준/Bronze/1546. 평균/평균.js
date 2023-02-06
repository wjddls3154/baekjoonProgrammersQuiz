let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = input[0] * 1;  // 곱하기 1해줘서, 문자 → 숫자로 변환.
const score = input[1].split(" ");  // 공백 기준으로, 점수를 각각 자름.

const max = Math.max(...score);  // 세준이의 최고 점수 score 중에 찾아서 저장.
let total = 0;  // 새로운 점수의 총 합을 저장해줄 변수.

// 반복문 이용해서, 각 점수마다 ( 점수 / max * 100 ) 공식 적용해서,
// 세준이의 새로운 과목 점수를 각각 얻어서, total 에 새로운 점수를 각각 더해준다.
for (let i = 0; i < num; i++) {
    total += score[i] / max * 100;
}

// 그리고, 위에서 구한 새로운 점수들을 모두 더한 total 을,
// num(과목의 개수)으로 나누어 주면, 새로운 평균이 나온다.
console.log(total / num);

