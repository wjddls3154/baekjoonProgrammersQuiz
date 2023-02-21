const input = require('fs').readFileSync('/dev/stdin');

let range = 1, block = 1;  // 시작 범위 : 1, 시작 블록 값 : 1

// 규칙 : 범위(range)가 1 증가할때마다, 둘러싼 방이 (6n) 씩 증가한다.
// Ex) 시작 블록 1번에서 2~7번까지는 2번만에 이동가능, 8~19번까지는 3번만에 이동가능
while ( block < input ) {
    block += 6 * range;
    range++;
}

console.log(range);
