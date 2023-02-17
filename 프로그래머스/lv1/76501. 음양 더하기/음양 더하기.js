function solution(absolutes, signs) {
    var result = 0;
    
    for(let i = 0; i < absolutes.length; i++) {
        // signs[i] 가 true 이면 더하고, false이면 빼준다. (삼항 연산자 이용)
        signs[i] ? result += absolutes[i] : result -= absolutes[i];
    }
    
    return result;
}