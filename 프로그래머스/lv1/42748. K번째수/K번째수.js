// ◎
function solution(array, commands) {
  return commands.map((x) => {
    return array
      .slice(x[0] - 1, x[1])  // 1. 시작 인덱스( x[0] 요소에서 -1 인덱스) ~ 끝 인덱스 ( x[1]요소 )
      .sort((a, b) => a - b)  // 2. 오름차순으로 정렬
      .slice(x[2] - 1, x[2])[0]; // 3. 시작 인덱스( x[2] 요소에서 -1 인덱스) ~ 끝 인덱스 ( x[2]요소 )의 0번요소
  });
}