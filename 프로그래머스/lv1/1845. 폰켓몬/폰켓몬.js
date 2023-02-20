function solution(nums) {
    let result = [ ...new Set(nums) ];  // 중복 제거한 포켓몬의 종류 개수
    let max = nums.length / 2;  // 최대한 선택할 수 있는 폰켓몬 종류 개수 = N/2마리
    
    // 중복 제거한 포켓몬의 개수(result)가, 최대한 선택할 수 있는 폰켓몬 종류의 개수(max) 보다 작으면 result.length를 반환
    // 반대이면, max를 반환
    // Ex) [3,3,3,2,2,2] 이면, result = 2 , max = 3 그럼, max가 result 보다 크기 때문에, result에 해당하는 2를 반환.
    // Ex2) [3,1,2,3] 이면, result = 3 , max = 2 그럼, result가 max 보다 크기 때문에, max에 해당하는 2를 반환.
    return result.length < max ? result.length : max;
}