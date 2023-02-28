// ◎
const solution = (n, left, right) => {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        const xLine = i % n;  // 열축(x)
        const yLine = parseInt( i / n );  // 행축(y)
        result.push(Math.max(xLine, yLine) + 1);  // 규칙을 보면 x축 혹은(or) y축 중에 큰 값에서 + 1 한 값이다.
        // Ex) 1(0, 0) 2(1,0)  3(2,0) 4(3,0) 으로, 좌표 중 큰 값인 x축이 계속 1씩 증가한다.
        // Ex2) 1(0, 0) 2(0,1)  3(0,2) 4(0,3) 으로, 좌표 중 큰 값인 y축이 계속 1씩 증가한다.
    }
    
    return result;  // 결과 값 반환
}

