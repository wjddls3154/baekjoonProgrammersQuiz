// ◎
function solution(storey) {
    var result = 0;
   
    // 마법의 엘리베이터의 맨 앞의 숫자가 9를 넘어갈 경우를 대비해서, '0'을 추가하여 배열로 담는다.
    storey = ('0' + String(storey)).split('');


    // 엘리베이터 자릿수 만큼 반복한다. 일의자리 부터 감소하며, 반복한다.
    for (let i = storey.length - 1; i >= 0; i--) {

        // 만약, 현재 자릿수의 숫자가 5일 경우
        if (storey[i] == 5) {
            
            // 만약, 다음 자릿수가 5보다 작다면, - 하는 것이 마법의 돌을 더 적게 사용한다. 
            if (storey[i-1] < 5) {
                result += Number(storey[i]);  // 그렇다면, 현재 숫자 만큼 마법의 돌(result)을 사용한다.
              
            // 만약, 다음 자릿수가 5보다 크다면, + 하는 것이 마법의 돌(result)을 더 적게 사용 한다.  
            } else {
                result += (10 - Number(storey[i]));  // 다음 자릿수를 증가 시킬 만큼 마법의 돌(result)을 사용한다.
                storey[i-1] = Number(storey[i-1]) + 1;  // 그리고, 다음 자릿수를 증가 시킨다.
            }
          // 만약, 현재 자릿수가 5보다 작다면, 
        } else if(storey[i] < 5) {
            result += Number(storey[i]);  // 현재 숫자 만큼 마법의돌(result)을 사용한다.  
            
          // 만약, 현재 자릿수가 5보다 크다면, 
        } else {
            result += (10 - Number(storey[i]));  // 다음 자릿수를 증가 시킬 만큼 마법의돌 사용한다.
            storey[i-1] = Number(storey[i-1]) + 1;  // 그리고, 다음 자릿수를 증가 시킨다.
        }
    }
    return result;  // 마법의 돌의 최소값을 반환한다.
}