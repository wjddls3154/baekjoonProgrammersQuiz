function solution(n) {
    let answer = [];  // 빈 배열
    
    // 반복문 이용해서, n값이 i값으로 나누어 떨어지면, answer 배열에 추가(push)
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer.push(i);
        }
    }
    return answer;
}