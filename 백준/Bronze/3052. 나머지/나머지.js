const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// cnt : 서로 다른 나머지의 개수
const cnt = new Set(input.map(x => x % 42)).size;

// map 메서드를 이용해서, 입력값을 42로 나누었을 때 나머지를 구하고,
// 중복 값을 제거한 후, 서로 다른 나머지의 개수(길이)를 반환해주는 방법이다.
// ( Set 객체를 이용하여, 쉽게 배열의 중복값 제거가능하다. )
// ( Set.size = Array.length 의 역할. set 객체 내 값의 개수 반환. )

console.log(cnt);
