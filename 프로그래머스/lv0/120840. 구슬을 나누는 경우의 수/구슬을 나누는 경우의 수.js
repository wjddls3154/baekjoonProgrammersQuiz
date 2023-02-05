// 문제 해결에 필요한 함수 작성 : 팩토리얼 구하는 함수
function factorial(num) {
    let numFactorial = BigInt(1) // numFactorial 기본값은 1이다. 그 이유는 팩토리얼 0과 1은 1이다.
    
    // 그래서, 반복문 적용할때도, 0과 1을 제외한 i >= 2 이상을 조건으로 넣은것이다.
    // 팩토리얼은, 값을 1씩 증감하면서 곱해주는 구조이다.
    for(let i = num; i >= 2; i-- ) {
        numFactorial *= BigInt(i);
    }
    return numFactorial;
}
// BigInt 는, 아주 큰 정수를 표현하기 위한 데이터 타입.
// BigInt 는, BigInt 끼리만 연산 가능하다.


// 문제
function solution(balls, share) {
  	
    // 힌트 참고 : 서로 다른 balls개 중, share개를 뽑는 경우의 수 공식
    return factorial(balls) / (factorial((balls-share)) * factorial(share));
}