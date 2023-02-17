const input = require('fs').readFileSync("/dev/stdin").toString();

// 숫자 1이 2초 걸리고, 그 다음 칸부터는 +1초씩이기때문에, 3초부터 시작
let dial = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
};

let minTime = 0;  // 단어가 주어졌을 때 이 전화를 걸기 위해서 필요한 최소 시간

for (let i = 0; i < input.length; i++) {
    for (let j in dial) {
        
        // dial에서 input[i] 에 해당하는 문자를 포함하고 있는지 확인하고,
        // 그 문자가 있다면, 그에 해당하는 숫자 시간을 누적해서 minTime에 더해주어서 결과 값을 출력한다.
        if(j.includes(input[i])) {
            minTime += dial[j];
        }
        
    }
}

console.log(minTime);
