function solution(n) {
    // n을 문자로 바꾸고(String), 각각 문자로 잘라서 배열로 만들어준다.(split)
    // 그리고, reduce 이용해서 각각 자른 각 자릿수의 합을 더하고, * 1 을 이용해서 숫자형으로 반환받는다.
    return String(n).split('').reduce( (a,b) => a + b * 1, 0);
}