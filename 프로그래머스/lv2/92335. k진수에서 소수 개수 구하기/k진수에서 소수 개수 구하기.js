// ◎
function solution(n, k) {
    let nums = n.toString(k).split("0");  // toString 이용해서, k진수로 변환된 수를 문자열로 만든다. 이때, 0을 기준으로 나눈다.
    return nums.filter(cnt => cnt  !== "" && isPrime(Number(cnt))).length;  // 그 중 소수 갯수를 카운트해서 반환한다.
}

// 소수 판별 함수
const isPrime = (num) => {
    // 만약, num이 1이하면 false를 바로 반환
    if ( num <= 1 ) return false;
    // 반복문은 2부터 시작해서 ~ num의 제곱근까지, 나누어 떨어지면 소수가 아니기에 false 반환
    for ( let i = 2; i <= Math.sqrt(num); i++ ) {
        if ( num % i === 0 ) return false;
    }
    // 그 외는 소수이므로 true 반환
    return true;
}