let input = require('fs').readFileSync('/dev/stdin').toString();

const result = [];  // 각 알파벳 위치 결과 값 배열

// 아스키코드 : 'a' : 97번, ~ 'z' : 122번
for (let i = 97; i <= 122; i++) {
  // fromCharCode(아스키코드→문자열) 이용해서, 알파벳 문자를 생성하고, 
  // indexOf 메서드 이용해서, 그 문자가 있으면 그 문자의 인덱스를 출력하고, 없으면 -1을 출력한다.
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));