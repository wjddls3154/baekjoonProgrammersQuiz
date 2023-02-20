function solution(s){
    // 문자열 s를 대문자로 만들고 split으로 각 문자를 구분했을 때, 대문자 P의 개수와 대문자 Y의 개수가 같은지 ?
    // 만약, 같으면 True 를 반환할 것이고, 다르면 False 를 반환할 것이다.
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}