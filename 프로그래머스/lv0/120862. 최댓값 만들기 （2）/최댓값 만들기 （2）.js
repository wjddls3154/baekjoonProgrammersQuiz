function solution(numbers) {
    let max = numbers[0] * numbers[1];  // max를 일단 0번째 인덱스 * 1번째 인덱스 값으로 기준 초기값 설정
    
    // 이중 for 문 설명 : 0번째 인덱스 i와, 1~끝 인덱스까지 비교, 그 다음 1번째 인덱스 i와 2~끝 인덱스까지 비교 ... 반복
    for(let i= 0; i<numbers.length; i++) {
        const first = numbers[i];
        
        
        for (let j= i+1; j<numbers.length; j++) {
            const second = numbers[j];
            
            // 모든 경우의 수를 max와 비교하면서, max보다 크면 그 값을 max값으로 바꿔준다.
            if(max < first * second) {
                max = first * second;
            }
        }
    }
    return max;
}