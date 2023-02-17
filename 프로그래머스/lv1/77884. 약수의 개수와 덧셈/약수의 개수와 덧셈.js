function solution(left, right) {
    var result = 0;
    
    for (let i = left; i <= right; i++) {
        // 우선, isInteger 이용해서 정수인지 확인 후, 숫자의 제곱근을 반환하는 Math.sqrt 를 사용
        // ( 만약, 제곱근이 정수이면 약수의 개수는 홀수이고, 소수점처럼 정수가 아니면 짝수라는 것 이용 )
        // Ex1) 16의 제곱근은 4, 16의 약수는 (1,2,4,8,16) 홀수개
        // Ex2) 14의 제곱근은 3.뭐시기, 약수는 (1,2,7,14) 짝수개
        if (Number.isInteger(Math.sqrt(i))) {
            result -= i;  // 그래서, 약수의 개수가 홀수이면 빼고,
        } else {
            result += i;  // 약수의 개수가 짝수이면 더한다.
        }
    }
    return result;  // 결과 반환
}