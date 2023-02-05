// 규칙은 등차수열 or 등비수열이다.
function solution(common) {
  let answer = 0;
  
  // 인덱스1 - 인덱스0 = 인덱스2 - 인덱스1 이 같다는것은 등차수열이라는 이야기이다.
  // 등차수열이라고 가정하고 한다.
  const chackValue = common[1] - common[0] === common[2] - common[1];
  
    
  // 만약, 등차수열이면, 뺀 값을 더해주고, 등비수열이면 나눈 값을 곱해주는것이다.
  // ( 우리가 구하는 것이 인덱스라, 배열길이-1 해줌. )
  if (chackValue) {
    answer = common[common.length - 1] + (common[1] - common[0]);
  } else {
    answer = common[common.length - 1] * (common[1] / common[0]);
  }
  return answer;
}
