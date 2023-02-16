function solution(numbers) {
    // 45(0~9까지의 총 합) - 현재, 숫자를 가지고 있는 numbers 정수 배열의 총 합을 빼주면, 그것이 numbers에 없는 숫자들의 합이다.
    return 45 - numbers.reduce( (cur, acc) => cur+acc, 0);
}