function solution(n) {
    var half = Math.floor(n/2); // 1. n을 절반으로 나누어서, half 에 저장한다.
    
    return half*(half+1); // 2. half와, half+1 을 곱하면, 결과값이 나온다.
}