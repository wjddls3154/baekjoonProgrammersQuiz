function solution(n, lost, reserve) {
    
    let result = 0;
    
    // 체육복을 도난당하고, 여벌이 없는 학생 ( 여벌 체육복을 빌려야 하는 학생 )
    const noReserveLost = lost.sort( (a,b) => a-b ).filter( (lost) => !reserve.includes(lost) );
    
    // 체육복을 도난당하지 않고, 여벌이 있는 학생 ( 체육복을 빌려줄 수 있는 학생 )
    let noLosthasReserve = reserve.sort( (a,b) => a-b ).filter( (reverse) => !lost.includes(reverse) );
    
    // 여벌도 없고, 체육복을 빌릴수도 없는 학생
    const notClassStudent = noReserveLost.filter((lost) => {
        
        // 첫번째로, 체육복을 빌려줄 수 있는 사람 
        const lend = noLosthasReserve.find((reserve) => Math.abs(reserve - lost) == 1);
        
        if(!lend) return lost;  // 체육복 빌려줄 사람이 없으면, 그대로 lost 리턴
        
        // 빌려준 사람은 제외하기
        noLosthasReserve = noLosthasReserve.filter((reverse) => reverse !== lend);
    })
  
    // 체육 수업을 들을 수 있는 학생의 최댓값 = 전체 학생 수 - 체육복이 없는 학생 수 
    result = n - notClassStudent.length;
    
    return result;
}