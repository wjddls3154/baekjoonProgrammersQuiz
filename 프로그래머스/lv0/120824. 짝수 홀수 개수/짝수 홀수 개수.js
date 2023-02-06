function solution(num_list) { 
    // 짝수 걸러주기
    const evenLength = num_list.filter(n => n % 2 === 0).length; 
    
    // 전체 배열길이에서 - 짝수 = 홀수 개수
    return [evenLength, num_list.length - evenLength]; 
}
