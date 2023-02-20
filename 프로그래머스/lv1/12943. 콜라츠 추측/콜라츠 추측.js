function solution(num) {
    var result = 0;
    
    // num이 1이 아니면서, 작업의 횟수가 500이 되지않는다면 while문 계속 작동
    while(num != 1 && result != 500) {
        
        // 입력된 수인 num이 짝수인가 ? 짝수라면 2를 나누고, 홀수이면 3을 곱하고 + 1을 해준다.
        // 그리고, result(작업의 횟수)를 1 증가시켜준다.
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1 ;
        result++;
    }
    // num이 1인가 ? num이 1이라면, result(작업의 횟수) 를 반환하고, 500번 반복하고도 1이 되지 않으면 -1을 반환.
    return num === 1 ? result : -1;
}