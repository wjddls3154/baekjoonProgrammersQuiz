// ◎
function solution(strings, n) {
    // localCompare 이용해서, 비교 대상 문자열의 n번째 글자가 같으면 문자열을 비교하고, 같지 않으면 n번째 글자를 비교해서 정렬하는 방법
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}