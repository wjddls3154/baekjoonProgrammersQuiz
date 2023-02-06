function solution(numbers, direction) {
    // "right" 이면, 오른쪽으로 한칸씩 민다.
    if (direction === "right") {
        numbers.unshift(numbers.pop());  // 배열의 맨 앞에, 제거한 배열의 마지막 요소를 배치한다.
        
    // 그 외 "left" 이면, 왼쪽으로 한칸씩 민다.    
    } else {
        numbers.push(numbers.shift());   // 배열의 맨 뒤에, 제거한 배열의 첫 번째 요소를 배치한다.
    }
    return numbers;
}


/*
*해결법*
unshift() : 배열의 맨 앞에 새로운 값을 추가하고, 그리고 배열의 새로운 전체 길이를 반환.
pop() : 배열의 맨 마지막 값을 제거하고, 삭제한 값을 반환.
push() : 배열의 맨 마지막에 하나 이상의 새로운 값들을 추가하고, 그리고 배열의 새로운 전체 길이를 반환.
shift() : 배열의 맨 앞의 값을 제거하고, 삭제한 값을 반환.
*/
