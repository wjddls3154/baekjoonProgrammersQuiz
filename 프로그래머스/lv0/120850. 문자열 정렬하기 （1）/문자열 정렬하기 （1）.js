function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}


/*
*해결법*
정규표현식은 /로 감싸진 패턴을 리터럴로 사용합니다.
Ex) /a/
\d : 숫자클래스, g 플래그가 없으면, 패턴과 일치하는 첫 번째 숫자만 찾는다.
+ 여기서 g플래그를 추가해주면 /\d/g , 모든 숫자를 찾아준다.
*/