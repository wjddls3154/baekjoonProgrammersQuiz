// numlist 배열에서, n의 배수인 수들만 필터링한다.
const solution = (n, numlist) => numlist.filter(x => x%n === 0);