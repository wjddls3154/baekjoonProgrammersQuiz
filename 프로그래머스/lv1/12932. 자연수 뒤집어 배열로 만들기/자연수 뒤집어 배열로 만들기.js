function solution(n) {
    // 자연수 n을 문자로 바꾸고(String), 각각의 문자를 자른 다음(split), 뒤집는다.(reverse), 그리고, 숫자형으로 변환한다.
    return String(n).split("").reverse().map( (a) => Number(a) );
}