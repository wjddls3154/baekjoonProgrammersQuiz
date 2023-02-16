function solution(survey, choices) {
    
  // 성격 유형을 셋팅한다.
  const surveyOrder = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  // 각 성격 유형의 점수를 체크하기 위해서, 객체를 만든다.
  const surveyScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((n, idx) => {
      
    // split() 메서드를 이용해서, survey 를 분리한다.
    const type = n.split("");

    // 들어온 choices의 점수에 따라, 모르겠음(4)을 기준으로 점수를 채점한다.
    if (choices[idx] < 4) {
      surveyScore[type[0]] += 4 - choices[idx];
    }
    if (choices[idx] > 4) {
      surveyScore[type[1]] += choices[idx] - 4;
    }
  });

  // 여기 까지 왔으면, 첫 번쨰 예시 기준으로 보기의 점수가 나온다.
  // { R: 0, T: 3, C: 1, F: 0, J: 0, M: 2, A: 1, N: 1 }

  // 아까 셋팅해둔 성격 유형을 가지고, 하나씩 성격을 골라준다.
  return surveyOrder.map((n) => {
      // ex) n === ["R", "T"]
      // surveyScore의 R의 점수와 T의 점수를 비교한 후, T가 더 크면 T를 선택하게 하고, R이 더 크거나 같으면 R을 선택하게 한다.
      // 이미 사전순으로 되어있어 정렬은 할 필요가 없다.
      if (surveyScore[n[0]] < surveyScore[n[1]]) {
        return n[1];
      }
      return n[0];
    } ).join(""); // 배열을 조인으로 합쳐준 후, 반환한다.
}