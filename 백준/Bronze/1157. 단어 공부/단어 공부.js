const input = require('fs').readFileSync('/dev/stdin').toString();

const upperInput = input.toUpperCase(); // input 문자열을 모두 대문자로 변환
const cntArr = new Array(26).fill(0);  // 알파벳의 개수 26개짜리 배열 0으로 초기화

for(let i = 0; i < input.length; i++){
  // upperInput i번째 문자열을 아스키 코드 번호로 전환
  // 대문자로 변환해놨으므로, 최소값인 대문자 A의 값 65를 빼주면 값이 나온다.
  cntArr[upperInput.charCodeAt(i) - 65]++;
}

const max = Math.max(...cntArr);  // cntArr 에서 가장 큰 수 추출
const index = cntArr.indexOf(max);  // max의 인덱스 번호를 추출

// max값을 가지는 인덱스가 여러 개일 경우를 판단하는 sameRate
let sameRate = false;

for(let i = 0; i < 26; i++){
  // 위에서 구한 max와, 인덱스가 같지않으면, 다른 인덱스에 또 max가 존재하는 것이므로 
  // sameRate를 true로 변경하고 반복문을 break 한다.
  // break 하는 이유는, 한번이라도 중복되면 ? 출력해야하므로 더 반복할 필요가 없기 때문이다.
  if(cntArr[i] === max && index != i){
    sameRate = true;
    break;
  }
}

// 삼항연산자를 사용해서 sameRate가 true이면, ? 를 출력.
// false이면, index + 65 값에 해당하는 대문자 영어로 변환해서 출력
console.log(sameRate ? "?" : String.fromCharCode(index + 65) );