function solution(n) {
    var result = 0;
    
    for(let i = 0; i <= n; i++) {
        // 만약, 반복문 동안 n이 i로 나누어 떨어지면 i는 n의 약수이다. 그러므로, i의 값을 result 에 누적하여 합한다.
        if(n % i === 0) {
            result += i;
        }
    }
    
    return result;  // 결과값 반환 
}