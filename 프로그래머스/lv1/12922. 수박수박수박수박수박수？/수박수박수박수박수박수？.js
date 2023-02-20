function solution(n) {
    // "수박" 단어를 repeat 이용해서 n번 반복한다.
    // 그리고, substring을 이용해서 0번 인덱스부터 ~ n번 인덱스 바로 앞(n-1)까지 자른다.
    // Ex) n = 3 이면, "수박" 단어를 세번 반복 = 수박수박수박 → substring 이용해서 자르면 수박수
    return "수박".repeat(n).substring(0,n)
}