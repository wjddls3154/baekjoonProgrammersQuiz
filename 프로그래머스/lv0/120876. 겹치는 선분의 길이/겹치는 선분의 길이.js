// ◎
function solution(lines) {
  var result = 0;
  let lineMap = new Array(200);  // 선분들이 놓일 공간, 배열길이 200으로 넉넉하게 선언
  lineMap.fill(0);  // 일단, fill 이용해서 0으로 배열 채워놓기.

    
  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      result += 1;
    }
  }

  return result;
}