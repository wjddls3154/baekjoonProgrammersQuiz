function solution(board) {
    let result = 0;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            
            // board[i][j] 의 값이 1인 경우(지뢰가 매설된 지역), 상화좌우 및 대각선 검사를 실행한다.
            // 해당 칸이 0인 경우에만, 상하 좌우를 2로 변경 (즉, 폭탄은 건들지 않는다.)
            if(board[i][j] === 1) {
                // 맨 윗줄이 아닌 경우
                if(i !== 0 && board[i-1][j] !== 1) {
                    board[i-1][j] = 2    
                }
                // 맨 아랫줄이 아닌 경우
                if(i !== board.length-1 && board[i+1][j] !== 1) {
                    board[i+1][j] = 2
                }
                // 맨 왼쪽이 아닌 경우
                if(j !== 0 && board[i][j-1] !== 1) {
                    board[i][j-1] = 2
                }
                // 맨 오른쪽이 아닌 경우
                if(j !== board[i].length-1 && board[i][j+1] !== 1) {
                    board[i][j+1] = 2
                }
                // 맨 대각선 윗 왼쪽이 아닌 경우
                if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1) {
                    board[i-1][j-1] = 2
                }
                // 맨 대각선 윗 오른쪽이 아닌 경우
                if(i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) {
                    board[i-1][j+1] = 2
                }
                // 맨 대각선 아랫 왼쪽이 아닌 경우
                if(i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) {
                    board[i+1][j-1] = 2
                }
                // 맨 대각선 아랫 오른쪽이 아닌 경우
                if(i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) {
                    board[i+1][j+1] = 2
                }
            }
        }
    }
    // 확인해서 0이면 지뢰가 없는지역이기때문에, result +1 증가
    board.forEach(a => a.forEach(b => b === 0 ? result++ : null));
    return result;
}