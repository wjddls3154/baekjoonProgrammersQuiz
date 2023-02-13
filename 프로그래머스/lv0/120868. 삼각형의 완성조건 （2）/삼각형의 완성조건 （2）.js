function solution(sides) {
    // 입출력 값 예시를 보면, (더 작은 변의 길이) * 2 - 1 의 값이라서 간단하게 이렇게 했다.
    return Math.min(...sides) * 2 - 1;
}