// ◎
function solution(users, emoticons) {
    
    const result = [0, 0];  // 결과 값 [이모티콘플러스 가입자 수, 이모티콘 판매액] 반환할 변수

    const sale = [10, 20, 30, 40];  // 할인율 퍼센트 변수
    
    // 이모티콘마다, 할인율을 적용 가능한 가짓수를 담는다. 
    // ex) 이모티콘 2개는 4 * 4 = 16 가지, 이모티콘 3개는 4 * 4 * 4 = 64 가지가 나온다.
    const arr = [];
    
    // 깊이 탐색(dfs)을 통해 가능한 가짓수를 탐색한다.
    function dfs (emoticons, result) {
        
        // 만약, 이모티콘이 없으면 탐색을 종료한다.
        if (emoticons.length < 1) {
            
            // arr 배열에, 탐색한 결괏값을 push(추가)한다.
            arr.push(result);
            return;
        }
       
        // 할인율 개수만큼 반복문을 돌린다. 
        for (let i = 0; i < sale.length; i++) {
            
            // 이모티콘 개수를 하나씩 줄이고, 줄였던 이모티콘의 할인율과 원가를 result에 담는다.
            dfs(emoticons.slice(1), [...result, [sale[i], emoticons[0]]]);
        }
    }
    
    // 최초로 dfs 함수 실행
    dfs(emoticons, []);
    
    // 할인가를 계산하는 함수
    const saleCal = (per, price) => (100 - per) / 100 * price;
    
    // 모든 가짓수만큼 실행한다.
    arr.forEach(saleArr => {
        
        // 가짓수마다 이모티콘 서비스 가입자 수와, 이모티콘 판매액을 구한다. [가입자 수, 판매액]
        const acc = [0, 0]
        
        // 사용자 수만큼 반복한다.
        users.forEach(([per, price]) => {
            
            let total = 0;  // 판매액 변수 선언
            
            // 가짓수에 담긴 이모티콘의 개수만큼 실행한다.
            saleArr.forEach(([sale, cost]) => {
                
                // 사용자가 원하는 할인가 이상일때만 판매액을 구한다.
                if(sale >= per) {
                    
                    // 총 판매액을 구한다.
                    total += saleCal(sale, cost);
                }
            });
            
            // 사용자의 마지노선 가격보다 판매액이 높으면, 그냥 이모티콘 플러스 서비스를 가입한다.
            if (total >= price) {
                // 이모티콘 서비스 사용자 1 증가
                acc[0] += 1;  
                
            } else {
                // 높지 않다면, 가입하지 않고 판매액만 증가시킨다.
                acc[1] += total;
            }
        });
        
        // 최댓값을 비교한다. 중요 우선순위 : 서비스 가입자 수 > 매출액 
        if (result[0] < acc[0]) {      
            // 가입자 수가 더 많으면, acc 값으로 최댓값 변경
            result[0] = acc[0];
            result[1] = acc[1];
            
        } else if (result[0] === acc[0]) {
            
            // 만약, 동일할 경우
            if(result[1] < acc[1]) {
                
                // 판매액으로 최댓값을 비교한다.
                result[1] = acc[1];
            }
        }
        
    }); 
    return result;  // 최댓값을 return 한다.
}