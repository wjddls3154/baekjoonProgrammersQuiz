// 유클리드 호제법 이용한 문제
// ◎
function euclid (arrayA, arrayB) {
    
    let result = 0;

    // 최대 공약수(gcd)를 구하는 재귀 함수
    // 만약, 나누고 난 나머지가 0이면 작은 수(b)가 최대공약수이다.
    // 하지만, 나머지가 0이 아니라면, 작은 수(b)를 다시 나머지로 나눈다. 이를 반복하는것이 유클리드 호제법.
    const gcd =  (a, b) => a % b === 0 ? b : gcd(b, a % b);
    
    // arrayA 배열에 담긴 값의 최대 공약수를 구한다.
    arrayA.forEach(x => result = gcd(result, x));

    // some() 함수 이용해서, arrayB 배열의 값 중 하나라도, arrayA의 최대 공약수(result)로 나누어 진다면 0을 반환 한다.
    if (arrayB.some(y => y % result === 0) ) return 0;
    
    // 나누어지지 않으면, arrayA 배열의 최대 공약수(result)를 반환한다.
    return result;
}

// arrayA = 철수, arrayB = 영희
function solution(arrayA, arrayB) {
    
    // 철수만 모든 숫자를 나눌수 있는 경우 
    let chul = euclid(arrayA, arrayB);

    // 영희만 모든 숫자를 나눌수 있는 경우 
    let zero = euclid(arrayB, arrayA);
        
    return Math.max( chul, zero );  // 마지막으로, 조건 중 하나를 만족하는, 가장 큰 양의 정수 결과 값 구하기
}

