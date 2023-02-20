function solution(x, n) {
    var answer = [];  // 결과값 저장
    
    // i를 1 ~ n번 반복
    for(let i = 1; i <= n; i++) {
        answer.push(x * i);  // 반복할때마다 x*i 한 값을 answer 에 추가(push)
    }                  
    return answer;
}