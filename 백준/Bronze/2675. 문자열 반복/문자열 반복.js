let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = input.shift(); // ?

for (let i = 0; i < num; i++) { // 테스트 케이스 개수만큼 반복문을 돌린다
    let result = '';  // 결과 값 저장

    const [times, str] = input[i].split(" "); // 반복횟수와 문자열을, 공백으로 구분하여 배열에 넣는다.

    for (let j = 0; j < str.length; j++) { 
        result += str[j].repeat(times);
    }   
    console.log(result);
}
