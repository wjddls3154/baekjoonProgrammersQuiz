// 합성수 : 1보다 큰 자연수 중에서 소수가 아닌 수로, 약수의 개수가 3개 이상이고 둘 이상의 소수를 곱한 자연수이다.
// ◎

function solution(n) {
    var result = 0;  // 합성수의 총 개수.
    
    for(let i = 1; i <= n; i++) {
        let cnt = 0;  // 약수의 개수 카운트.
        for(j = 0; j <= i; j++) {
            if(i % j === 0) cnt ++;  // 만약, i % j 가 0으로 나누어떨어지면, cnt + 1.
        }
        // 만약, cnt 가 2 초과 즉, 세 개 이상이면 result + 1.
        if(cnt > 2) {
            result += 1;
        }
    }
    return result;
}
