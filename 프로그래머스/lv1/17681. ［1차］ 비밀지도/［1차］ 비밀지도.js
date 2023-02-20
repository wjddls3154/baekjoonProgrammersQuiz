// ◎
// n : 지도의 한 변 크기, arr1,arr2 : 정수 배열
var solution=(n,arr1,arr2) => arr1.map( 
    
    // a의 요소와 arr2 배열을 or 연산, padStart 이용해서 n의 자릿수만큼 0으로 채운다.
    // 그리고, 정규표현식 이용해서 전역에서, replace() 메서드를 이용해서 0과 1을 찾아서 " ", # 로 바꿔준다.
    (a,i) => (a|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'));
