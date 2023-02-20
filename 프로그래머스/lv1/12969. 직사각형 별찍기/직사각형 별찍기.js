process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let result = "";  // 결과값 출력할 변수
    
    // b(세로)줄만큼 반복
    for(let i = 0; i < b; i++) {
        // 별을 한 줄에 a(가로)개만큼 찍는다.
        for(let j = 0; j < a; j++) {
            result += "*";  // 출력할 변수에 별을 담는다.
        }
        result += "\n"  // 줄 바꿈
    }
    console.log(result);  // 결과값 출력
});