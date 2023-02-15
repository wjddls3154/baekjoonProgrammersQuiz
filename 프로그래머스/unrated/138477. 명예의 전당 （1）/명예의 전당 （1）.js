function solution(k, score) {
    var result = [];
    
    var honorArr = [];  // 명예의 전당 점수를 담는 배열 생성
    
    // score에 담긴 점수를, 하나 하나씩 꺼낸다.
    score.forEach(sc => {
        
        // 명예의 전당 점수 에 넣는다 (push).
        honorArr.push(sc);
        
        // 명예의 전당 점수 배열을, 내림차순(큰수→낮은수)으로 정렬하고, 상위 k번(명예의전당최대개수)까지 자른다.
        honorArr.sort((a,b) => b-a).splice(k);
        
        // 명예의 전당 배열에 있는 값 중, 제일 작은 최소 값을 result에 담는다 (push).
        result.push(Math.min.apply(null, honorArr));
    });

    // 매일 기록된 명예의 전당에 담긴 최소값 배열을 return 한다.
    return result;
}