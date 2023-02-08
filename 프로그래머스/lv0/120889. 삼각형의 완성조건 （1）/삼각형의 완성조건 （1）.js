function solution(sides) {
    sides.sort((a,b) => a-b);  // 오름차순 정렬해서, 맨 앞에 제일 작은수, 맨 뒤에 제일 큰 수 오게한다.
    return (sides[0] + sides[1] > sides[2] ? 1 : 2);  
    // 가장 큰 한변보다, 나머지 두 변의 합이 더 크면 1(삼각형 완성 가능) 더 작으면 2(삼각형 완성 불가능)
}