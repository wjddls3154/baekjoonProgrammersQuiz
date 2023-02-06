function solution(age) {
    // a~j 까지, 하나의 문자열에 담는다.
    let str = 'abcdefghij'; 
    // 문자 결과 값에 +를 붙이면, 숫자로 변하는 것을 이용.
    return Array.from(age.toString())
        .map(x => str[+x])
        .join('');
}


/*
* 해결법 *
- 자바스크립트 Array 메소드 from()은, 대상이 되는 값을 배열로 변환해주는 메소드이다.
- 자바스크립트 map 메서드는, 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아서, 새로운 배열을 반환해주는 메서드이다.

- 자바스크립트 join('')은, 리스트 요소를 하나의 문자열로 만들어주는 함수이다.
Ex1) join()   // 비어있을 경우, 각 원소 사이에 쉼표가 들어간다. aaa, bbb, ccc
Ex2) join("")   // 따옴표 할 경우, 구분자가 없다. 모든 원소가 붙어서 나온다. aaabbbccc
Ex3) join("-")   // 따옴표 안에 구분자 넣을 경우, aaa-bbb-ccc
*/
