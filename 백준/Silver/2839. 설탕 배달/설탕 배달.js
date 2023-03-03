// ◎
let input = Number(require('fs').readFileSync('/dev/stdin').toString());
const solve = (x) => {
	let cnt = 0;
	while (x > 0) {
        // 만약, 5로 나누어 떨어지면, 그 몫을 cnt에 넣어서 즉시 반환.
		if (x % 5 === 0) return cnt + x / 5;
        // 나누어 떨어지지 않으면, x 값에서 3을 계속 빼주고 cnt는 증가하며, 5로 나누어지는 값을 찾는다.
		x -= 3;
		cnt++;
        // 만약, x가 0이면 cnt 값을 반환한다.
		if (x === 0) return cnt;
	}
    // 0 미만이 되면 -1을 출력한다.
	return -1;
};
console.log(solve(input));