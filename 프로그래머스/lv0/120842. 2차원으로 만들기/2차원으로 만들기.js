function solution(num_list, n) {
    const result = [];

    // num_list의 길이가 0이 되면 while문 중단
    while(num_list.length) {
        // num_list 배열을 splice 함수 이용해서, 배열을 자르고 그 결과 값을 answer배열에 담아준다.
        result.push(num_list.splice(0, n));
    }

    return result;
}

/*
splice 내장함수는,
첫 번째 인자로, 자르기 시작할 index 를 입력하고, 
두 번째 인자로, 어디까지 자를 건지 하는 index 를 넣어주면 된다.
세 번째 인자로는, 삭제한 것의 자리에 새로 삽입할 데이터를 넣는다.
배열.splice(시작 인덱스, 삭제할 데이터 개수, 새로 삽입할 데이터);
*/