function solution(my_string, num1, num2) {
    const answer = [...my_string];
    
    // num 간의 문자열을 반환함.
    answer.splice(num1, 1, my_string[num2]);  // num1 인덱스에 해당하는 1개 요소 제거하고, 그 자리에 num2 요소 넣기.
    answer.splice(num2, 1, my_string[num1]);  // num2 인덱스에 해당하는 1개 요소 제거하고, 그 자리에 num1 요소 넣기.
    return answer.join("");  // ("") : 리스트요소를 중간에 콤마 빼고 이어서 하나의 문자열로 만들어줌
}

/*
*해결법*
splice() : splice 메서드는 배열의 기존 요소를 삭제 or 교체하거나 새 요소 추가하여 배열의 내용 변경.
splice(시작 인덱스, 삭제할 데이터 개수, 새로 삽입할 데이터)
*/
