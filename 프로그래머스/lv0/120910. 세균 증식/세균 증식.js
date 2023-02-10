// n : 처음 세균의 마리수, t : 경과한 ~시간
const solution = (n, t) => new Array(t).fill(n).reduce((a,b) => a*2, n);