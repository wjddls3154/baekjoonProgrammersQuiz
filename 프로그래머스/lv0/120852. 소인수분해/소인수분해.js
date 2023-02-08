function solution(n) {
    const pnmNum = []  // 소인수 오름차순으로 담을 배열

    // 2부터 n까지 돌면서 나누어떨어지는지 확인
    for (let i = 2; i <= n; i++) { 
        // n이 0으로 나눠지면, n의 약수이기에 push로 배열에 추가해준다.
        while (n % i === 0) {
            pnmNum.push(i);
            n /= i;  // 그리고, n을 i로 나누고, 그 n을 다시 반복한다.
        }
    }
    
    // 만약, 반복문을 다 돌고도 n이 2 이상이면, 그것은 그냥 1과 n만 가지고 있는 소수인데, 1은 추가할필요없으므로 n만 추가.
    if(n > 2){
        pnmNum.push(n);    
    } else {  // 그 외는, 여러 소수를 곱한 수이므로,
    let result = Array.from(new Set(pnmNum)); // result 라는 새로운 Array 객체 만들고, set 이용해서 중복까지 제거
    return result.sort((a,b) => a - b);  // 그리고, 그 결과값 배열을 오름차순 정렬
    }
}

/*
Array.from() 메서드는 유사 배열 객체나, 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만듭니다.
Ex) Array.from(234),    Array.from('foo')
→ Array [2, 3, 4],    → Array ["f", "o", "o"]    
*/
