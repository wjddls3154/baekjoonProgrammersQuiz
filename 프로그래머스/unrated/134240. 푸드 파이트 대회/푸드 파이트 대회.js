// 음식이 2개 이상인 경우에만 양쪽으로 나눠서 배치할 수 있다.
function solution(food) {
    
  let result = "";
    
  // 가져온 음식을 2로 나누고, repeat() 메서드를 이용하여 i(i번 음식의 수)를 몇번 먹을지를 정한다. Ex) 3번 : iii
  for (let i = 1; i < food.length; i++) {
    result += String(i).repeat(Math.floor(food[i] / 2));
  }

  // 서로 양쪽에서 같은 순서로, 음식을 먹어야하기 때문에
  // 가운데에 0(물)을 넣고, reverse() 메서드를 이용해 대칭을 만들어준다.
  return result + "0" + [...result].reverse().join("");
}
