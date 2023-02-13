function solution(my_string) {
  // 정규표현식 이용해서, my_string 의 숫자만 꺼낸다.
  const nums = my_string.match(/[0-9]+/g);
  
  // map을 이용해서, nums 배열의 요소를 +로 숫자형으로 변환한다.
  // 그리고, reduce 이용해서 숫자로 바꾼 요소들을 다 더해주고 반환한다.
  return nums ? nums.map(num => +num).reduce((a, c) => a + c) : 0;
}