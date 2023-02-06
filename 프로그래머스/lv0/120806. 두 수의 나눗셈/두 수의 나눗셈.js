function solution(num1, num2) {
    var answer = 0;  // 변수 생성

    // 변수에, num1을 num2로 나눈 값에, 1000을 곱한 값을 저장한다.
    answer = Math.floor( (num1 / num2) * 1000 )  
    return answer;  // 그 값을 담은 변수를 반환
}
