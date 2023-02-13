function solution(s, skip, index) {
    let result = ""; 
    
    // 정규식 이용해서 알파벳 중, skip 에 포함된 알파벳을 제외한 단어의 배열을 추출한다.
    const reg = new RegExp( `[^${skip}]`, "g" );
    
    // match 메서드 이용해서, skip에 포함단 단어를 제외한 단어의 배열이 나온다.
    const alpha = "abcdefghijklmnopqrstuvwxyz".match(reg);
    
    for (const cha of s) {
        // 단어를 하나씩 확인하면서, index 더해준다.
        const idx = alpha.indexOf(cha) + index;
        
        // 더한 값이 단어 배열의 크기를 넘으면 안되니까,
        // idx % alpha.length 를 넣음으로써, 배열의 크기를 넘으면, 순서가 앞으로 다시 돌아가게 한다.
        result += alpha[ idx % alpha.length ];
    }
    
    return result;
}
