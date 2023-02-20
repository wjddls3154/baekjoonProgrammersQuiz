function solution(d, budget) {
    d.sort((a,b) => a-b);  // d는 부서별로 신청한 금액이 들어있는 배열을 오름차순으로 정렬
    
    // reduce 이용해서 a+b 초기값0 해서 d의 요소 더해서 전체 희망예산의 합을 구하고,
    // 그 전체 희망예산의 합이 budget 보다 크면, d.pop으로 d 배열의 마지막값 추출(제거)
    while (d.reduce((a, b) => (a+b), 0) > budget) d.pop();  
    
    return d.length;  // 그러다, 전체 희망예산의 합이 작아지면 반복문을 탈출하고, d.length를 반환
}