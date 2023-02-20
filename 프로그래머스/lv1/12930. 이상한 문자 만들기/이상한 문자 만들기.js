function solution(s) {
    var result = '';
    let idx = 0;
    
    // 반복문 이용해서, s를 각각 글자씩 체크하면서, 
    for (let char of s) {
        // 짝수인가 ? 인덱스가 짝수이면 그 해당 문자를 대문자로, 인덱스가 홀수이면 그 해당 문자를 소문자로 변경하게 삼항연산자 이용.
        result += (idx % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
        idx += 1;  // 그러면, 그 인덱스는 변경되었으므로, 다음 인덱스로 넘어가기 위해 idx 1 증가
        
        // 그러다, 만약, 공백이 나타나면 다음 단어가 나타난 것이므로, idx를 0으로 초기화시킨다.
        if (char === ' ') idx = 0;  
    }
    return result;  // 결과값 반환
}