// ◎
function solution(line) {
    var result = [];
    
    // 두선의 교점을 찾아내는 함수
    let crossPoint = ( [A, B, E], [C, D, F]) => {
        if ( A * D - B * C === 0) {
            return false;
        }
        const x = ( (B * F) - (E * D) ) / ( (A * D) - (B * C) );
        const y = ( (E * C) - (A * F) ) / ( (A * D) - (B * C) );
        
        // 이때, 교점은 정수만 취급하기에, 정수인 경우에만, 좌표를 반환한다.
        return Number.isInteger(x) && Number.isInteger(y) ? [x,y] : false;
    }
    
    let cross = [];
    line.forEach( l1 => line.forEach( l2 => 
             crossPoint(l1, l2) ? cross.push(crossPoint(l1, l2)) : null ))
    
    // 좌표 평면의 최적 크기 : 최적의 가로 길이와, 최적의 세로 길이 필요하다.
    let xMin = Math.min( ...cross.map(ele => ele[0]));
    let xMax = Math.max( ...cross.map(ele => ele[0]));
    let yMin = Math.min( ...cross.map(ele => ele[1]));
    let yMax = Math.max( ...cross.map(ele => ele[1]));
    
    
    // 최적의 가로 길이(가장 큰 x 좌표 - 가장 작은 x 좌표), 최적의 세로 길이(가장 큰 y 좌표 - 가장 작은 y 좌표)
    // +1은 배열로 표현하기위해서 해주는것이다.
    result = Array.from( Array(yMax - yMin + 1) , _ => Array(xMax - xMin + 1).fill('.') );
    
    // x 좌표는 오른쪽으로 교점의 가장 작은 x 좌표 만큼,
    // y 좌표는 아래쪽으로 교점의 가장 큰 y 좌표를 기준으로, y 좌표만큼 이동하여 그려주면 문제는 해결된다.
    cross.forEach( ([x,y]) => {
        result[yMax - y][x - xMin] = '*';
    })

    return result.map( ele => ele.join(''));
}