function solution(my_str, n) {
    let str = my_str.split("");
    
    let answer = [];
    
    // splice() 는 slice()와 다르게 원본 배열에 영향을 준다.
    // splice 이용해서 my_str 의 0번 인덱스부터 n개만큼 잘라낸 문자를, join 이용해서 answer 배열에 추가(push)
    while(str.length > 0) {
        answer.push(str.splice(0,n).join(""));
    }
    return answer;
}