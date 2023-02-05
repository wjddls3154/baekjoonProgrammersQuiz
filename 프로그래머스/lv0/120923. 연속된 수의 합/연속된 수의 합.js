// 가우스의 덧셈 활용 : 제일 앞의 숫자와, 제일 뒤의 숫자를 더하면 모든 쌍의 합이 나오며, 그 개수는 전체 개수의 절반이다.
// Ex) 1~100, 첫 숫자 : 1, 끝 숫자 : 100, 둘의 합 : 101, 모든 쌍의 개수 : 50, 모든 숫자의 합 : 101*50 = 5050

function solution(num, total) {
    return Array(num).fill((total - num * (num - 1) / 2) / num).map((a, i) => a + i);
}
