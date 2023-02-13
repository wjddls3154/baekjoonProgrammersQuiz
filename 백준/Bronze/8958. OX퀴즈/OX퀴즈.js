let inputData = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(inputData[0]);

for (let i = 1; i <= num; i++) {
    let cnt = 0;  
    let sum = 0;
    for (let j = 0; j < inputData[i].length; j++) {
        // 만약, 해당 문자가 "O"이면 cnt 증가, "O"가 아니면 cnt를 0으로 만든다.
        if (inputData[i][j] === "O") {
            cnt++;
        } else {
            cnt = 0;
        }
        // 모든 입력값 비교 후, cnt 값을 sum 에 누적시켜 결과값 출력
        sum += cnt;
    }
    console.log(sum);
}
