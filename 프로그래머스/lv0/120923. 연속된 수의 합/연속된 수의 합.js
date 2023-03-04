// 가우스의 덧셈 활용 : 제일 앞의 숫자와, 제일 뒤의 숫자를 더하면 모든 쌍의 합이 나오며, 그 개수는 전체 개수의 절반이다.
// Ex) 1~100, 첫 숫자 : 1, 끝 숫자 : 100, 둘의 합 : 101, 모든 쌍의 개수 : 50, 모든 숫자의 합 : 101*50 = 5050

function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2

    return Array(num).fill().map( (_, i) => a + i)
    // (+α) fill 인자 안에 a의 계산값 넣어서 변수 선언 줄일 수 있다.
}

/*
* 해결법 *
- Array 메소드인 fill() 메서드 활용 : 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.

구문 : arr.fill( value, start, end )
value : 배열을 채울 값, start : 시작 인덱스, 기본 값은 0, end : 끝 인덱스, 기본 값은 this.length
*/