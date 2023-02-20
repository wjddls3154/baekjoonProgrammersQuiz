// 2016년 a월 b일 구하는 문제.
function solution(a, b) {
    
  // 월을 나타내는 정수 값은, 1월을 나타내는 0부터 ~ 12월을 나타내는 11까지 사용. 0부터시작이다. 그래서, a-1 해주는 것
  var date = new Date(2016, (a - 1), b);
  // 그리고, 생성된 Date를 문자열로 변환하고,
  // slice로 0번 인덱스부터 ~ 세 글자를 대문자로 변경하면, 입출력 예시처럼 요일의 줄임말이 대문자로 나온다.
  return date.toString().slice(0, 3).toUpperCase();
}