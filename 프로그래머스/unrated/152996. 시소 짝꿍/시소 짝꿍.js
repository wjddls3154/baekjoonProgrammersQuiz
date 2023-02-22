// ◎
function solution(weights) {
    let result = 0;
    
    const arr = {}; // key,value
    const ex = [1, 3/2, 2, 4/3]; // 입출력 예시 경우의 수 : (1,1), (2,3), (2,4), (3,4)

    // 내림차순 정렬 후, 반복문으로 전체 요소 하나씩 돌면서,
    weights.sort((a,b)=> b - a).forEach((w) => { 
        let ar = 0;
        ex.forEach((i)=>{
            // 만약, w * i 를 곱한 값이 arr 에 존재할 경우,
            if ( ar = w * i, arr[ar] ) { 
              result += arr[ar];  //result에 더해준다
            }
        });
        if ( !arr[w] ) arr[w] = 1;
        else arr[w]++;
    });
    return result;
}
