// node.js 의 file system 모듈을 불러온다.
const [a,b,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((x,y)=> x-y);
// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, trim() 함수를 통해 공백을 제거한다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.
// 만약, Map의 Key 타입이 숫자(number) 일 때는, sort() 함수를 만들어서 지정해줘야 한다.


// 1) 같은 숫자가 3개이면 : 10000원 + ((같은 숫자) * 1000 )
if(a==b && b==c) console.log(10000 + a*1000);
// 2) 같은 숫자가 2개이면 : 1000원 + ((같은 숫자) * 100 )  
else if(a==b || b==c) console.log(1000 + b*100) 
// 3) 모두 다른 숫자이면 : (셋 중 가장 큰 수 ) X 100 
// ( x-y 정렬(오름차순) 이어서 c가 제일 큰 수 )
else console.log(c*100);

