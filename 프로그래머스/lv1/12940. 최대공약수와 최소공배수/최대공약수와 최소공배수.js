// 최대 공약수 : 두 수 n과 m의 공통된 약수 중에 가장 큰 정수
// 최소 공배수 : 두 수 n과 m의 공통된 약수 중에 가장 작은 정수
// ◎

function solution(n, m) {
    // 최대 공약수
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); 
    // 최소 공배수 = 두 수를 곱한후에 최대공약수로 나누면 나옴.
    const lcm = (a, b) => a * b / gcd(a, b); 
    return [gcd(n, m), lcm(n, m)];
}

