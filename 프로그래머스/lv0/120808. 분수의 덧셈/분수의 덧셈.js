function solution(numer1, denom1, numer2, denom2){

    var answer = [];  // 빈 배열 생성

    // 분자 구하기 = de
    let de =  numer1 * denom2 + numer2 * denom1;

    // 분모 구하기 = num
    let num = denom1 * denom2;

    let x = de;   // 변수 x에 분자 넣기
    let y = num;  // 변수 y에 분모 넣기

    
    // 최소 공약수 구하기
    const gcd = (x, y) => (x % y === 0 ? y : gcd(y, x % y));

    // 최소 공약수를 분자 분모에 나누고, 배열에 넣기    
    answer[0] = x / gcd(x, y);
    answer[1] = y / gcd(x, y);
    
    return answer;
}


/*
* 여기서 사용한 최소 공약수 구하는 방법 * 
1. x와 y를 서로 나눈다. 만약, 나누어진다면 y가 최대 공약수이다. ( a > b )
2. 만약, 서로 나누어지지 않는다면, y와, x를 y로 나눈 나머지인( x % y ) 로 다시 나눈다.
3. 만약, 2번 상황에서 서로 나누어진다면, x % y 가 최대 공약수이다. 만약, 나누어지지 않으면 다시 위의 방법을 반복한다.
*/
