function solution(ingredient) {
    var result = 0;  // 상수가 포장하는 햄버거의 총 개수
	
    var bag = [];  // 햄버거 재료를 담을 가방 생성
    
    // 햄버거 재료의 수 만큼, 반목문을 돌린다.
    ingredient.forEach( (food, i) => {
        bag.push(food);  // 스택에 해당 재료를 담는다.
        
        // 가방의 총 크기가 4 이상이면서, 음식이 1(빵)일 경우에
        if(bag.length >= 4 && food === 1) {
            
            // slice 이용해서 가방에 담긴 재료 4개를 뽑아서, 버거를 만들어본다.
            let bugger = bag.slice(bag.length-4, bag.length).join('');
            
            // 만약, 버거가 만들어지는 경우 (빵-야채-고기-빵),
            if(bugger === '1231') {
              
                // 가방에서 사용한 재료들을 삭제한다.
                bag.splice(bag.length-4, bag.length);
                
                // 그리고, 버거를 포장한 횟수를 1 증가시킨다.
                result++;
            }
        }
    });
    return result;
}