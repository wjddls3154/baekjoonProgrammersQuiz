function solution(k, m, score) {
    
    // 일단, 사과의 점수를 오름차순 정렬을 한다.
    score.sort((a, b) => a - b);
    
    let result = 0;  // 최대 이익 저장할 함수
    
    // 가장 뒤에서부터, m개씩 한 박스를 만든다.
    while(score.length >= m){
        const box = score.splice(score.length - m, m);  // score.length-m 인덱스부터 ~ m개를 반환받는다.
        
        const prize = m * Math.min(...box);  // min쓰는 이유는, 최저사과점수 * 한 상자에 들어가는 사과의 수(m)가 최대 이익이다.
        
        result += prize;  // result에 구한 최대 이익을 더해준다.
    }
    return result;
}