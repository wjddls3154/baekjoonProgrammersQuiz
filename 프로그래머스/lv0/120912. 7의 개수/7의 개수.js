// join 이용해서 배열을 하나의 문자열로 만들고, 그 문자열을 각각 한 문자씩 자른다.
// 그리고, filter 를 이용해서, a = '7' 에 해당하는 조건만 개수를 세서 리턴한다.
const solution = array => array.join("").split("").filter(a => a === '7').length;