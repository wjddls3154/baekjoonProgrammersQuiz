// ◎
function solution(babbling) {
  let result = 0;

  // forEach() 메서드로, babbling을 하나씩 확인한다.
  for (let word of babbling) {

    // 정규식을 이용해서, 연속된 같은 발음이 있는지 체크한다. ( 연속해서, 같은 발음을 하지 못하기 때문)
    // 연속된 같은 발음이 있다면, continue를 통해 무시하고 다음 단어로 넘어갑니다.
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 또 정규식을 이용해서, 조카가 발음할 수 있는 단어만 있는지 체크한다.
    // 조합한 발음이, 조카가 발음할 수 있는 단어만 있다면, result를 1 증가시킨다.
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      result++;
    }
  }

  return result;
}

/*
*해결법*
정규식 :

test() : 주어진 문자열이 정규 표현식을 만족하는지 판별 후 true or false 반환
*/