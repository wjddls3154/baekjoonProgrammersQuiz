// 절댓값 오차가 가장 작은 리스트를, 오름차순 정렬하여 가까운 수 중 가장 작은 수 반환
const solution = (array, n) => +array.filter(a => Math.abs(a-n) === Math.min(...array.map(a => Math.abs(a-n))) ).sort( (a,b) => a-b )[0]


/*
*해결법*
+ 붙여서 숫자형으로 변환,
자바스크립트 filter 함수는 주어진 조건을 통과하는 모든 요소를 모아 새로운 배열로 반환,
abs : 절대값
*/