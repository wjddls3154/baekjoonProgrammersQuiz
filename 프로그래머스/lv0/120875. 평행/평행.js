// ◎
function solution(dots) {
    const leanArr = [];
    
    // dots의 길이만큼 반복
    for(let i = 0 ; i < dots.length ; i ++) {
        
        // i번째를 제외한 그 다음부터 반복
        for(let j = i+1 ; j < dots.length ; j ++) {
            
            // 기울기 = y좌표의 차이 / x좌표의 차이
            const curLean = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
            // 만약, 기울기가 같다면, 평행
            if(leanArr.includes(curLean)) return 1;
            leanArr.push(curLean);
        }
    }
    return 0;
}