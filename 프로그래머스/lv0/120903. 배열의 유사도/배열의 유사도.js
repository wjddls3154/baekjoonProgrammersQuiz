const solution = (s1, s2) => s1.filter((a, i) => s2.includes(a)).length;
// s1의 원소가, s2에 포함되어있는경우를 필터로 걸러서 그 길이를 반환.