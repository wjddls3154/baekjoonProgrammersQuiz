function solution(dots) {
    
    // 가로 길이 = 가장 큰 x의 값 - 가장 작은 x의 값
    const garo = Math.max(...dots.map(a => a[0])) - Math.min(...dots.map(a => a[0]));
    
    // 세로 길이 = 가장 큰 y의 값 - 가장 작은 y의 값
    const sero = Math.max(...dots.map(b => b[1])) - Math.min(...dots.map(b => b[1]));
    
    return garo*sero;  // 직사각형의 넓이(가로*세로) 반환
}