// ◎
function solution(number) {
    let result = 0;
    
    // 함수 정의
    const triple = (current, start) => {
        if (current.length === 3) {  // 만약, 학생 3명일때 세 명의 값을 더했을 때 합이 0인가 ?
            // 만약, 그 합이 0이면 result에 1을 더한다.
            result += current.reduce( (acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }
        
        // for문 이용해서 모든 조합 검사
        for (let i = start; i < number.length; i++) {
            triple( [...current, number[i]], i+1 );
        }
    }
    triple([], 0);
    return result;
}