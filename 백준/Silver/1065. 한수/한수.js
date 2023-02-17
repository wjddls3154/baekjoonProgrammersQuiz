let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

function solution(num) {
    let cnt = 0;  // 한수의 개수
    for (let i = 1; i <= num ; i ++) {
        let strNum = String(i);
        let dif1 = Number(strNum[1]) - Number(strNum[0]);
        let dif2 = Number(strNum[2]) - Number(strNum[1]);

        // 100 미만의 수는 무조건 한수
        if(i < 100) { 
            cnt++;
            continue;
        }
        
    // 100이상부터는 한수인지 dif1과 dif2 이용해서 체크
        if (dif1 === dif2) {
                cnt++;
        }
        
    }
    return cnt;
}
console.log(solution(num));