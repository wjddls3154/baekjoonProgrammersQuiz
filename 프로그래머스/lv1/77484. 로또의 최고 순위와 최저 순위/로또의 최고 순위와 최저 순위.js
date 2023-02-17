function solution(lottos, win_nums) {
    const ranking = [6, 6, 5, 4, 3, 2, 1];

    // 최저 순위 = 알고 있는 번호만 일치하는 것
    let minRank = lottos.filter(a => win_nums.includes(a)).length;
    let zeroCnt = lottos.filter(a => a===0).length;  // 알아볼 수 없는 수(0)의 갯수

    const maxRank = minRank + zeroCnt;  // 최고 순위 = 최저 순위 + 0의 갯수

    // 인덱스 0,1 : 6(낙첨), 인덱스 2 : 5등, 인덱스 3 : 4등 .... 인덱스가 높을수록 높은 로또 순위
    return [ranking[maxRank], ranking[minRank]];  
}
