// 문자열 : s , 밀 거리 : n
function solution(s, n) {
    
    var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // 대문자 저장
    var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";  // 소문자 저장
    
    var result= '';

        for (let i = 0; i < s.length; i++) {
            let str = s[i];

            // s[i] 가 문자가 아닌 공백일 경우에는, 공백을 할당한다. : 공백은 아무리 밀어도 공백이기 때문 (제한조건)
            if(str == ' ') {
                result += ' '; 
                continue;
            }

            // includes 이용해서, 문자열 s에 대문자 문자열(upperAlpha)에 해당하는 문자가 있으면 upperAlpha, 없다면 lowerAlpha. 
            var alphaArr = upperAlpha.includes(str) ? upperAlpha : lowerAlpha;

            // 위에서 소문자나 or 대문자로 바뀐 문자의 인덱스를, n(거리)만큼 민다.
            var idx = alphaArr.indexOf(str) + n;

            // 만약, n을 더한 인덱스(idx)가, 할당한 문자열(alphaArr)의 길이보다 크거나 같을 경우는 ?
            // 알파벳의 끝쪽에서 알파벳 앞으로 오는 것이다. Ex) z → a
            // 그래서, 인덱스(idx) - 문자열 길이(alphaArr.length)를 빼야한다.
            if(idx >= alphaArr.length) idx -= alphaArr.length;

            result += alphaArr[idx];  // 계산한 인덱스에 해당하는 문자를, result 에 할당
        }
    
    return result;  // 최종 결과값 반환.
}
