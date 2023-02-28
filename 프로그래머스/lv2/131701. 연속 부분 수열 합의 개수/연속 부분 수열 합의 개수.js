// ◎
const solution = (elements) => {
    let result = new Set();
    let len = elements.length;
    
    // 연속 부분 수열의 길이
    for (let i = 1; i <= len; i++) { 
        let sum = 0;
        
        /* 슬라이딩 윈도우 */
        // 연속 부분 수열 시작 지점의 인덱스
        for (let j = 0; j < len; j++) {  
            if (j === 0) { 
                for (let k = 0; k < i; k++) {
                    sum += elements[k];  // 최초 한 번의 창문에 대해서만, 직접 합을 구한다.
                }
            }
            else { // 이후 창문들에 대해서는, 이전에 구한 합을 활용한다.
                sum -= elements[ j - 1 ];
                sum += elements[ (j + i - 1) % len ];
            }
            result.add(sum);
        }
        
    }
     return result.size;  // 결과 값 반환
}
