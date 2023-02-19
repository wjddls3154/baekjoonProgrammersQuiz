// ◎
function solution(N, stages) {
    
    const result = [];  // 실패율이 높은 스테이지를, 내림차순으로 저장할 배열
    
    for(let i = 1; i <= N; i++){
        const reach = stages.filter((x) => x >= i).length;
        const fail = stages.filter((x) => x === i).length;
        result.push([i, fail / reach]);  // i번 스테이지 실패율 : 스테이지에 도달했으나 클리어 실패한 사람 / 스테이지에 도달한 총 인원
    }
    
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}