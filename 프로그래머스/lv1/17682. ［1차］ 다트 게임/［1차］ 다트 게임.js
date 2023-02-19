function solution(dartResult) {
    
    var score = 0;
    var stack = [];
    var nums = 0; // 숫자 담을 변수
    
    for(let i = 0; i < dartResult.length; i++) {
        
        if (dartResult[i] >= 0 && dartResult[i] <= 9 ) { // 0~9 에 해당하는 숫자일 경우
            
            // 만약, dartResult[i] == 1 && dartResult[i+1] == 0일 경우, 숫자 10에 해당.
            if (dartResult[i] == 1 && dartResult[i+1] == 0 ) {
                nums = 10;  // nums 변수에 10을 넣고
                i++;  // i를 1 증가시켜준다.
                
            } else { // 만약, 10이 아닐 경우, 그대로 nums에 넣어준다.
                nums = dartResult[i];
            }
            
        }
        
        else if (dartResult[i] === "S") { // Single : 1제곱
            stack.push(Math.pow(nums,1));
            
        } else if (dartResult[i] === "D") { // Double : 2제곱
            stack.push(Math.pow(nums,2));
            
        } else if (dartResult[i] === "T") { // Triple : 3제곱
            stack.push(Math.pow(nums,3));
            
        } else if (dartResult[i] === "#") { 
            stack[stack.length-1] *= -1;  // 아차상 : 해당 점수 부호를 -로 변경
            
        } else if (dartResult[i] === "*") { // 스타상 : 지금 해당 점수와, 바로 이전 점수 2배로 만들어줌.
            stack[stack.length-1] *= 2;
            stack[stack.length-2] *= 2;
        }
    }
    
    for(let i = 0; i < stack.length; i++) { // 보너스(S,D,T)와 옵션(*,#)이 적용된 점수들 합치기
        score += Number(stack[i]);  // 숫자화
    }
    return score;  // 최종 점수 반환
}