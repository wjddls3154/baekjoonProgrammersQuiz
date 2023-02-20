// 소수 판별 함수
const primeCheck = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(nums) {
    
  let len = nums.length;
  let result = 0;

  // 3중 for 문 이용하여, 3개씩 조합이 가능한 모든 수를 탐색
  // i와 j가 있는 for문의 경우 숫자 조합의 1번째, 2번째 숫자를 담당하므로, 배열의 끝까지 돌 필요는 없어서 -2, -1을 적용
  for ( let i = 0; i < len - 2; i++ ) {
    for ( let j = i + 1; j < len - 1; j++ ) {
      for ( let k = j + 1; k < len; k++ ) {
          
        // 만약, nums의 [i],[j],[k] 를 더한 값(total)이, 소수 판별 함수인 primeCheck 가 true이면, result 의 값을 1 더한다.
        let total = nums[i] + nums[j] + nums[k];  
          
        // 조합된 숫자의 짝수 판별을, primeCheck 함수 호출전에 판단하여 불필요한 호출을 줄임.
        if (total % 2 !== 0 && primeCheck(total)) {
          result++;
        }
      }
    }
  }
  return result;
}

