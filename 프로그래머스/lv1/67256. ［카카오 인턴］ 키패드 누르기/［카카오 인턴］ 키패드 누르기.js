// ◎
function solution(numbers, hand) {
    
    function distance(num, lH, rH, pos, hand){
        
    const lD = Math.abs(pos[lH][0] - pos[num][0]) + Math.abs(pos[lH][1] - pos[num][1]);  // 왼손 거리
    const rD = Math.abs(pos[rH][0] - pos[num][0]) + Math.abs(pos[rH][1] - pos[num][1]);  // 오른손 거리
    
    // 만약, 두 엄지의 거리가 같으면, 왼손잡이면 왼손 엄지, 오른손잡이면 오른손 엄지 사용.
    if (lD === rD) return hand === 'left' ?  'L' : 'R';
    return lD < rD ? 'L' : 'R';  // 오른손 거리가 더 크면 왼손으로 누르고, 그외면 오른손으로 누름.
        
}

    const pad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    var lH = '*', rH = '#';  // 왼손과 오른손 시작 초기값
    var result = ''  // 결과값 저장 배열
    
    for (var num of numbers){
        // 3으로 나눴을때 1이 나오는 1,4,7 은 왼손으로 누르기로 했다.
        if (num % 3 === 1){
            result += 'L';
            lH = num;
        }
        
        // 3으로 나눴을때 0이 나오는 3,6,9 은 오른손으로 누르기로 했다.
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rH = num;
        }
        
        // 그외에 해당하는, 가운데 2,5,8 은 더 가까운 손으로 누르기로 했다.
        else{
            result += distance(num, lH, rH, pad, hand)
            result[result.length-1] === 'L'? lH = num : rH = num
        }
    }

    return result;
}