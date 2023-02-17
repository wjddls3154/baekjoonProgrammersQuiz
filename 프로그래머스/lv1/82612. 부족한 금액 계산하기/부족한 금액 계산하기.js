function solution(price, money, count) {
  
  let totalMoney = 0;  // 자신이 가지고 있는 총 금액

  // 놀이기구를 N번 째 이용하면, 원래 이용료의 N배를 받는다. ( price * i 번째를 셋팅해둔 값에 더해준다. )
  for (let i = 1; i <= count; i++) {
    totalMoney += price * i;  // 반복문 돌면서, price * i 번째마다의 이용료를, totalMoney 에 누적 합한다.
  }

  // 필요한 값이 money보다 크면 놀이기구 타기에 부족한금액 (totalMoney - money) 반환, 
  // 돈이 놀이기구 타기에 충분하다면, 0을 반환.
  return totalMoney > money ? totalMoney - money : 0;
}