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

/*
* 해결법 *
등차수열과 등비수열의 개념을 확실히 알고있어야한다.
등차수열 : 이웃하는 두 항 사이의 차가 일정한 수열을 등차수열이라고 하고, 그 일정한 차를 공차라고 한다.
등비수열 : 이웃하는 두 항 사이의 비가 일정한 수열을 등비수열이라고 하고, 그 일정한 차를 공비라고 한다.
*/