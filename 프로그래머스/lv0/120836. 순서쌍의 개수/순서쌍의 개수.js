function solution(n) {
    
    // 정답 배열 생성
    const result = [];
    
    // 1부터~  n까지 반복하며, 모든 약수를 정답 배열의 끝에 추가(push)
    for(let i = 1 ; i <= n ; i ++) {
        if(n%i === 0) result.push(i);
    }
    
    // 모든 약수의 수 = 순서쌍의 수와 같음
    return result.length;
    
}
