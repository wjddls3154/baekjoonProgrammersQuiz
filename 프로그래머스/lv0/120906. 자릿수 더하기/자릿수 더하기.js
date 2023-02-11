function solution(n) {
	return String(n).split('').reduce((acc, cur) => acc + +cur, 0);
}
// 정수 n의 타입을 string으로 바꾸어준다. 
// 그 다음, split 메서드 이용해서, 각 문자를 1문자씩 쪼개서 배열을 만들어준다.
// 그리고, reduce 메서드를 이용해서, 각 자릿수의 합을 구해주는데, reduce 의 cur 값은 문자열이기때문에 숫자처리