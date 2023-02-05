function solution(age) {
    // a~j 까지, 하나의 문자열에 담는다.
    let str = 'abcdefghij'; 
    // 문자 결과 값에 +를 붙이면 숫자로 변하는 것을 이용.
    return Array.from(age.toString())
        .map(x => str[+x])
        .join('');
}