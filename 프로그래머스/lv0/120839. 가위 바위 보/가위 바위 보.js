function solution(rsp) {
    var answer = '';
    
    for(let i = 0; i < rsp.length; i++) {
        let hand = rsp.charAt(i);
        // 문자열로 취급해서 인덱스 이용해서 풀기.
        
        // 만약, 인덱스 i의 문자가 가위(2)이면, answer에 바위(0)를 추가. 
        if(hand === "2") {
            answer += "0";
        }
        // 만약, 인덱스 i의 문자가 바위(0)이면, answer에 보(5)를 추가.
        else if(hand === "0") {
            answer += "5";
        }
        // 만약, 인덱스 i의 문자가 보(5)이면, answer에 가위(2)를 추가.
        else if(hand === "5") {
            answer += "2";
        }
    }
    
    return answer;
}