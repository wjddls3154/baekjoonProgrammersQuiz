// ◎
function solution(numbers, k) {
  const ballNext = current => (current + 2) % numbers.length;
  let current = 0;
  
   
  for (let i = 0; i < k - 1; i++) current = ballNext(current);
    
  return numbers[current];
}
