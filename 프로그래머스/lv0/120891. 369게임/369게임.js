function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}


/*
*해결법*
matchAll 메서드는 지정된 정규식에 대해, 문자열과 일치하는 모든 결과를 반환.
여기서 사용된 정규식 : /[3|6|9]/g : 전체 문자열을 탐색해서, 3 또는 6 또는 9와 매칭되는경우의 길이 받아서 반환.
*/