let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let num = input;  // 입력 값
let sum;  // 새로운 수
let i = 0;  // 사이클 길이

while (true) { 
  i++;  // 사이클 길이 + 1 증가

  // 입력 값 10의 자리에 있는 숫자를 구하고 + 입력 값 1의 자리 수를 더해준다.  
  // Ex1) num의 10의 자리 숫자(2) + num의 1의 자리 숫자(6) = 8이 sum(새로운 수) 가 된다.  
  // Ex2) num의 10의 자리 숫자(6) + num의 1의 자리 숫자(8) = 14이 sum(새로운 수) 가 된다.  
  sum = Math.floor(num / 10) + num % 10;
    
  // 입력 값 1의 자리에 있는 수를 10의 자리 수로 만들고 + 새로운 수 1의 자리 수를 더해준다.
  // Ex1) num의 1의 자리 수 6을 60으로 만들고, sum의 1의 자리 수 8을 더한다 = 68
  // Ex2) num의 1의 자리 수 8을 80으로 만들고, sum의 1의 자리 수 4를 더한다 = 84  
  num = (num % 10) * 10 + sum % 10; 

  // 입력 값과, 더한 결과의 값이 완전히 일치해지면, break를 통해 while문을 빠져나온다.
  if (input === num) {
    break;
  } 
}

console.log(i);
