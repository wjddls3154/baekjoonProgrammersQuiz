// ◎
function solution(s) {
  // 정규식 사용
  let reg = /^\d{6}$|^\d{4}$/;
  return reg.test(s);  // test() 메서드는 패턴과 일치하는 문자열이 있으면 true, 없으면 false 반환한다.
}