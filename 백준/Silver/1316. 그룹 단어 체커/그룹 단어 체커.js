let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);  // 단어의 개수
let countGroupWord = 0;  // 그룹 단어의 개수

for (let i = 1; i <= caseCount; i++) {
    
  const word = input[i]; // 각 줄의 소문자 단어
  const letter = [];  // 처음 발견된 소문자를 넣는 곳
  let isGroupWord = true;  
 
  for (let j = 0; j < word.length; j++) {
      
    // 만약, letter에 각 줄의 소문자 단어인 word의 j인덱스의 문자가 저장되어 있지 않다면(-1 = false 의미),
    // 그 문자는 처음 나온 문자이므로 추가한다.(push)
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
        
    // 그 외 ? 처음 나온 문자가 아닌것이다.    
    } else {
      // 만약, 해당 문자의 인덱스가 letter 배열의 마지막 요소의 인덱스위치가 아니라면,  
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;  // 그룹 단어에서 제외한다. (그 이유는, 처음이 아닌 다시 발견된 문자이기 때문)
        break;
      }
    }
  }

  if (isGroupWord) {
    countGroupWord += 1;
  }
    
}

console.log(countGroupWord);