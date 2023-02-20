function solution(num) {
    // 삼항 연산자 이용, num이 2로 나누어떨어지는가 ? 떨어지면 Even을 반환, 그 외는 Odd를 반환해라.
    return (num % 2 === 0 ? "Even" : "Odd");
}