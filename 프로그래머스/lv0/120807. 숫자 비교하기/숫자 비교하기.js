function solution(num1, num2) {
    var answer = 0;  // 변수 생성
    
    if(num1 === num2) {  // 만약, num1과 num2가 완전히 같으면
        return 1;  // 1을 반환하고
    } else {
        return -1;  // 그 외는 -1을 반환한다.
    }
}