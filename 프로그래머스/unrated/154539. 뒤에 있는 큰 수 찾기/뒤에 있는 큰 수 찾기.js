// ◎
function solution(numbers) {
    
  const result = Array(numbers.length).fill(-1);  // -1로 배열을 다 채운다.
  const numArr = [];
    
  for (let i = 0; i < numbers.length; i++) {
    
    // Array.at(-1) 은 배열의 마지막 요소를 의미.
    while (numArr && numbers[numArr.at(-1)] < numbers[i]) {
      result[numArr.pop()] = numbers[i];  
    }
    numArr.push(i);  
  }
  return result;
}