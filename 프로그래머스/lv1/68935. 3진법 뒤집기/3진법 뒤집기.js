function solution(n) {
    return parseInt( [...n.toString(3)].reverse().join(""), 3 );
}

/*
해결법
Number.toString([N진수]) : 숫자를 입력한 진수로 변환한 string을 반환한다. 진수를 생략하면, 기본값은 10진수로 변환한다.
reverse() 이용해서 뒤집고, join() 으로 다시 배열로 합친다.
Number.parseInt(string, [N진수]) : string을, N진수에서 10진수로 계산한 값을 반환한다.
*/