// ◎
function solution(answers) {
    var result = [];
    
    // 수포자 1,2,3 번의 방식
    var person1 = [ 1, 2, 3, 4, 5 ];
    var person2 = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
    var person3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ];

    // filter 를 사용해서, 매개변수로 주어진 answers 를 탐색하면서, 수포자들의 정답 번호와 비교. (완전탐색)
    var o1 = answers.filter( (x,y) => x === person1[ y % person1.length ]).length;
    var o2 = answers.filter( (x,y) => x === person2[ y % person2.length ]).length;
    var o3 = answers.filter( (x,y) => x === person3[ y % person3.length ]).length;
    
    var high = Math.max(o1,o2,o3);  // o1,o2,o3 중 가장 많은 문제를 맞힌 사람을, high에 넣는다.

    // 가장 많은 문제를 맞힌 high 에 해당하는 사람을, result에 추가한다.(push)
    if ( o1 === high ) { result.push(1) };
    if ( o2 === high ) { result.push(2) };
    if ( o3 === high ) { result.push(3) };
  
    return result;
}