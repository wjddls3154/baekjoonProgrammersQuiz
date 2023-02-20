// 1.문자열을 split메소드를 사용하여 배열로 쪼갠다. Ex) ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
// 2. sort메소드로 순차적으로 나열해준다. Ex) ["Z", "b", "c", "d", "e", "f", "g"]
// 3. reverse메소드로 반전시켜준다. Ex) ["g", "f", "e", "d", "c", "b", "Z"]
// 4. join메소드로 문자열로 바꿔줘서 반환한다. Ex) "gfedcbZ"

function solution(s) {
    return s.split("").sort().reverse().join("");
}

/*
- sort((a,b) => (b - a))는, 숫자를 비교하기 위해서 사용되는 방식이다.
- 유니코드 값으로 영어 대문자는 소문자보다 작기 때문에, 오름차순으로 정렬 후 reverse메서드로 뒤집으면 된다.
*/