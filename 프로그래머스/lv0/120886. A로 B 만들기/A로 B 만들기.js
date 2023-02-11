function solution(before, after) {
    // 두 문자열을, 똑같이 정렬하여 각 인덱스 비교
    before = [...before].sort()
    after = [...after].sort()
    return before.filter( (a,i) => a === after[i] ).length === after.length ? 1 : 0
}