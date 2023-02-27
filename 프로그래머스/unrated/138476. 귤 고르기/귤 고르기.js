function solution(k, tangerine) {

  let obj = {};

  // 같은 크기의 귤이 몇개가 있는지 확인한다.
  tangerine.forEach((n) => {
      
    // 이미 그 크기의 귤이 있으면 1을 더해주고, 그 크기의 귤이 없으면 1을 넣어준다.
    obj[n] = ++obj[n] || 1;
  });
    
  // 결과 예 ex) { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2} ,  kind = [2, 2, 2, 1, 1]
  // 서로 다른 종류의 수의 최솟값을 구하기 위해서는, 종류는 상관 없고 값만 필요하다.
  // 그래서, Objext.values() 메서드를 통해 값만 추출 한 후, sort() 메서드를 이용해서 내림차순으로 정렬해준다.
  const kind = Object.values(obj).sort((a, b) => b - a);
  
  let total = 0;
  let result = 0;

  // kind(귤 크기 종류의 개수)를 하나씩 체크한다. 정렬했기에 귤의 개수가 가장 큰 수부터 체크가 된다.
    
  for (let num of kind) {
    result++;  // 한번 for문이 돌 때 마다 result 값에 1을 더하고,
    total += num;  // total 값에 들어온 값들을 다 더해줍니다.

    // total(귤의 개수의 합)의 값이 k(상자에 담으려는 귤의 개수)보다 크거나 같으면, 최솟값을 충죽했으므로 for문을 중지시킨다.
    if (total >= k) break;
  }

  return result;
}
