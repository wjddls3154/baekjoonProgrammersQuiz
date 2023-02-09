const solution = (cipher, code) => [...cipher].filter( (a,i) => (i+1)%code === 0).join("")
// code의 배수로, 나누어 떨어지는 경우에만, solution 에 해당 문자를 추가한다.
// 그냥 join("")은, 객체 사이에 아무 문자도 넣지않고 문자 연결
