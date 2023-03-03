const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [n, nums] = input.split("\n");

const isPrime = (x) => {
    // 만약, x가 1이면 false 반환
    if (x == 1) {
        return false;
    }
    
    // 소수는 2부터 시작, sqrt(제곱근) 이용
    for (let i = 2; i <= Math.sqrt(x); i++) {
        // 만약, x를 i로 나눴을 때 0으로 떨어지면, false 반환
        if (x % i === 0) {
            return false;
        }
    }
    // 두 상황 다 아니면 소수로 판별, true 반환
    return true;
}
// filter 와 isPrime 이용해서, 해당 조건에 해당하는 값만 걸러서 결과 값 반환
console.log(nums.split(" ").filter(v => isPrime(v) ).length);  
