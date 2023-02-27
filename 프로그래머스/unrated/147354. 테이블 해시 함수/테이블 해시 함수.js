// ◎
function solution(data, col, row_begin, row_end) {
    let result = 0;
    
    // col 번째 컬럼의 값을 기준으로 오름차순 정렬한다.
    // 만약, col이 2면, 2번째 값을 비교해서 오름차순 정렬하는 것.
    const sortData = data.sort((a,b) => {
        if(a[col-1] > b[col-1]) return 1;
        
        // 만약, col 번째 컬럼의 값이 동일하다면, 첫 번째 컬럼의 값을 기준으로 내림차순 정렬한다.
        else if(a[col-1] === b[col-1]) return b[0] - a[0];
        else return -1;
    })
    
    // i 번째 행의 튜플에 대해, 각 컬럼의 값을 i로 나눈 나머지들의 합으로 정의
    for (let i = row_begin ; i <= row_end ; i++) {
        // 결괏값을, 정답 변수에 XOR(입력이 서로 다를때만 참이다.)
        result ^= sortData[i-1].map(a => a % i).reduce((x, y, idx) => x + y, 0);
    }
    return result;  // 결과 값 반환
}