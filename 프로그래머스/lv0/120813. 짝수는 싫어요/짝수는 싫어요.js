function solution(n) {
    var answer = [];
    
    // 배열이 1부터 시작
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            answer.push(i);
        }
    }
    return answer;
}