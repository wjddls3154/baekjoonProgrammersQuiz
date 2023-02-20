function solution(s) {
    // 단어 s의 길이가 2로 나누어 떨어지면(짝수이면) ? 중간 글자 2개를 반환하고, 홀수이면 중간 글자 1개만 반환한다.
    return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[parseInt(s.length / 2)];
}