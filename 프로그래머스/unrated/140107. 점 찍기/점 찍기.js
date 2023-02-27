// ◎
function solution(k, d) {
    let result = 0;
    
    // x 좌표 값 만큼 반복 실행
    for (let x = 0; x <= d; x += k) {
        
        //  x² + y² = d² 인 것을 활용해서 y² = d² - x² 을 통해 y²값 도출
        // 원점과의 거리 y의 좌표를 구한다.
        let y = parseInt( Math.sqrt(d ** 2 - x ** 2) );
        
        // y 좌표 내부를 찍을 수 있는 점의 최대 개수는 y/k
        result += parseInt( y / k ) + 1;
    }
    return result;
}