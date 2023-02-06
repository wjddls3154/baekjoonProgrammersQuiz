const solution = (my_string, n) => [...my_string].map(a => a.repeat(n)).join("");


/*
* 해결법 *
- ... : 전개 연산자는, 배열 또는 객체를 하나하나 보면서 넘기는 용도로 사용된다.
- repeat() 함수로, 정수 n만큼 반복한다.
- map 메소드 활용 : 배열의 map() 메서드를 사용하면, 원본 배열을 새롭게 수정된 배열로 만들 수 있다.

- join 함수 
Ex1) join()   // 비어있을 경우, 각 원소 사이에 쉼표가 들어간다. aaa, bbb, ccc
Ex2) join("")   // 따옴표 할 경우, 구분자가 없다. 모든 원소가 붙어서 나온다. aaabbbccc
Ex3) join("-")   // 따옴표 안에 구분자 넣을 경우, aaa-bbb-ccc
*/
