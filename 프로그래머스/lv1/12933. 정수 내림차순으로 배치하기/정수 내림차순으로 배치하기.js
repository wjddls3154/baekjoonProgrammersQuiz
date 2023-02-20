// 숫자 n을 문자열로 변환(toString)시키고, 한글자씩 잘라서 배열로 만들고(split), sort로 내림차순(b-a) 정렬을 하고.
// 그리고, join("")을 통해 다시 각각의 문자를 문자열로 합쳐준다.
// 그리고, 마지막에 전체를 둘러싼 Number 로 문자형 → 숫자형으로 변환된 결과값이 나오는 것이다.
const solution = (n) => Number( n.toString().split("").sort((a,b) => b-a).join("") );