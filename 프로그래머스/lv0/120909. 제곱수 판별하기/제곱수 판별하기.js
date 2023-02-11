// 제곱수 : 어떤 수를 제곱했을 때 나오는 수
function solution(n) {
    var answer = Math.sqrt(n);  // sqrt 는 제곱근 값 반환
    return Number.isInteger(answer) ? 1 : 2;  // 전달된 값(answer)이, 정수인지 아닌지 isInteger 로 확인
}