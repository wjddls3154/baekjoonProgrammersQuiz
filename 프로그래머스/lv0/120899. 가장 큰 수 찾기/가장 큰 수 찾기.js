const solution = array => [Math.max(...array), array.indexOf(Math.max(...array))]
// [최댓값, 최대값의 현재 인덱스] 를 구해서 반환한다.
// max 를 이용해서 최대값 구하고, indexOf 이용해서 인덱스 반환받음