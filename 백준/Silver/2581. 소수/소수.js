const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [min, max] = input.map(Number);
let primeArr = [];  // 소수들을 담을 배열

// 소수 판별
const isPrime = (x) => {
    if (x == 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

for (let j = min; j <= max; j++) {
    // 만약, i가 소수이면, primeArr에 추가
    if (isPrime(j)) {
        primeArr.push(j);
    }
}

let primeSum = 0;  // 소수들의 총 합

for (let k = 0; k < primeArr.length; k++) {
    primeSum += primeArr[k];
}
// 만약, 소수가 없으면 -1을 반환, 있으면 첫째 줄에 소수의 합, 둘째 줄에 소수 중 최소값 출력
console.log(primeArr.length === 0 ? -1 : `${primeSum}\n${primeArr[0]}` );

