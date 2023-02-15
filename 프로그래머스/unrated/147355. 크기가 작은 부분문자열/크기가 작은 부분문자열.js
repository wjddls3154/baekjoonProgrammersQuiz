function solution(t, p) {
    var result = 0;  // 결과 값 저장하는 변수
    
    // 0부터, t의길이에서 p의길이뺀만큼까지 반복
    for (let i = 0; i <= t.length - p.length; i++) {
        let num = t.substr(i, p.length);  // substr 이용해서, i인덱스부터 p길이만큼 문자열 부분 추출해서 num 변수에 넣어주기
        
        // 만약, 숫자형으로 변환한 num과 p를 비교했을 때, p가 num 이상이면 result 를 1증가시켜준다.
        if (Number(num) <= Number(p)) 
            result++;
    }
    return result;
}

/*
*해결법*
substr 메서드 사용해서, 부분 문자열을 추출하고 값을 비교해서 푼다.
*/