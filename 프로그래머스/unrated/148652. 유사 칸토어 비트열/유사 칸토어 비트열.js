// ◎
let result = 0;
let N,L,R;

function solution(n, l, r) {
    [N,L,R] = [n, l-1, r-1]; 
    repe(1,0,4,"11011");
    return result;
}

function repe(d, curL, curR, val) {
    if (d >= N) {
        if (L <= curL && curL <= R && L <= curR && curR <= R) result += val[0] == "1" ? 4 : 0;
        else if (curL < L && L <= curR && curR <= R) for (let i = L % 5; i <= curR % 5; i++) val[i] == "1" && result++; 
        else if (L <= curL && curL <= R && curR > R) for (let i = curL % 5; i <= R % 5; i++) val[i] == "1" && result++; 
        else if (curL <= L && R <= curR) for ( let i = L % 5; i <= R % 5; i++) val[i] == "1" && result++;
        return;
    } 
        
    for (let i = curL; i <= curR; i++) {
        let tempL = Math.pow( 5 , N - d ) * i;
        let tempR = tempL + Math.pow( 5, N - d ) -1;
        if( (tempL < L && tempR < L) || (tempL > R && tempR > R) ) continue;
        val[i % 5] =="1" && repe( d + 1, i * 5, i * 5 + 4, "11011");
    }
}