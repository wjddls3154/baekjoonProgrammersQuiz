function solution(s) {
  const result = [];
  const map = new Map();

  [...s].map( (v, i) => {
    if (!map.has(v)) result.push(-1);  // 만약, map에 현재 글자가 없고 처음 나온 글자라면, result에 -1을 추가(push)
    // 만약, map에 현재 글자가 이전에 나온적이 있는 글자라면, map.get 이용해서 그 값의 인덱스를 불러와서, 현재 글자 인덱스에서 빼준 값을 result에 추가(push) 해준다.  
    else result.push(i - map.get(v));    
    map.set(v, i);  // 자신과 가장 가까운 곳의 글자를 찾아야 하므로, 반복의 마지막마다 map 갱신
  });

  return result;
}