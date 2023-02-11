// num에 k가 있는가? k가 있으면, num의 k인덱스+1 추가해서 반환하고, 없으면 -1을 반환
const solution = (num, k) => [...num+""].indexOf(k+"") !== -1 ? [...num+""].indexOf(k+"")+1 : -1;