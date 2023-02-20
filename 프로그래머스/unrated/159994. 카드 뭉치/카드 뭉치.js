// ◎
function solution(cards1, cards2, goal) {
    
    for (let word of goal) {
        // 만약, cards1의 0번째 인덱스가 word와 같다면, 배열의 맨 앞 요소(0번째 인덱스)를 빼와서 삭제한다.
        if (cards1[0] === word) cards1.shift();
        
        // 만약, cards2의 0번째 인덱스가 word와 같다면, 배열의 맨 앞 요소(0번째 인덱스)를 빼와서 삭제한다.
        else if (cards2[0] === word) cards2.shift();
        
        // word가 cards1의 0번째 인덱스와, cards2의 0번째 인덱스와도 같지 않다면 "No"를 반환한다.
        else return "No";  
    }
    // 반복문이 무사히 끝나게 되면 "Yes"를 반환한다.
    return "Yes";
}
