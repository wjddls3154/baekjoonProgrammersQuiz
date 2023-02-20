function solution(phone_number) {
  // "*"을 phone_number의 길이에서 4만큼 뺀 횟수만큼, 반복한 문자열과
  // phone_number의 배열에서, 마지막 네 개의 엘리먼트를 추출한 문자열을 이어붙인 후에 반환.
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

/*
slice 음수 인덱스는 배열의 끝에서부터의 길이를 나타낸다.
Ex) slice(-2) 는 배열에서 마지막 두 개의 엘리먼트를 추출한다.
*/
