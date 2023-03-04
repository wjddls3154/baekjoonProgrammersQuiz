function solution(babbling) {
    const canSpeak = ['aya','ye','woo','ma'];  // // 조카가 할 수 있는 발음
    let result = 0;
    
    // 전체 문자 배열
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        // 가능한 발음 배열
        for(let j = 0; j < canSpeak.length; j++){
            
            // 각 발음은 최대 한번씩인데, 2번 등장하면 반복문 탈출.
            if(babble.includes(canSpeak[j].repeat(2))){
                break;
            }
            babble = babble.split(canSpeak[j]).join(" ");
        }
        
// 만약, 발음을 재조합한 문자열의 크기가 0이면, 발음할수 있다. 0이 아니면 발음 못하는 다른 문자가 포함된 것.
// 이것이 되는 이유는, 위에서 join(" ")를 사용하여 알파벳 소문자가 아닌 문자열로 join 했기 때문.
        if(babble.split(" ").join("").length === 0){
            result++;  // result 증가
        }
    }
    return result;  // 마지막으로, 결과값 반환
}

/*
* 해결법 *
- split(" ")  : 공백을 기준으로 자른 값을 배열로 반환
- join("") : 리스트 요소를 콤마(,)를 빼고 하나의 문자열로 만들어준다.
*/