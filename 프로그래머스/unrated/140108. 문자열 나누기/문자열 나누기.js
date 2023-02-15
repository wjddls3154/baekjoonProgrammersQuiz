function solution(s) {
  let result = 0;  // 분해한 문자열의 개수
  let fixedChar = "";  // 첫 글자를 담을 배열
  let cnt1 = 0;  // 첫 글자와 같은 배열
  let cnt2 = 0;  // 첫 글자와 다른 배열

  // 문자를, for of 문으로 하나씩 확인한다.
  for (let c of s) {

    // 만약, fixedChar이 공백이면, 첫 문자를 fixedChar에 넣어준다. ( 우린 첫 문자를 알아야 한다. )
    if (!fixedChar) fixedChar = c;
    
    // 첫 문자와, 새로 들어온 문자인 c가 같다면 cnt1를 증가시킨다.
    if(fixedChar === c) cnt1++;
      
    // 첫 문자와 새로 들어온 문자가 다르다면 cnt2를 증가시킨다.
    else cnt2++;

    // 만약, cnt1과 cnt2의 숫자가 같아지면, result를 1 증가시키고, 나머지를 초기화 한다.
    if (cnt1 === cnt2) {
        result++;
        cnt1 = 0;
        cnt2 = 0;
        fixedChar = "";
    }
  }

  // 반복문이 끝났는데, fixedChar이 남아있는 경우는,
  // 처리되지 않은 문자열들이므로 이들은 하나의 문자열로 본다. 그래서, answer을 1 증가시킨다.
  if (fixedChar) result++;

  return result;
}
