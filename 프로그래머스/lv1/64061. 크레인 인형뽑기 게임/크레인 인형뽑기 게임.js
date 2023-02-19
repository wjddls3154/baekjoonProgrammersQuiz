// ◎
function solution(board, moves) {
  var result = 0;  // 터트려서 사라진 인형의 총 개수 저장하는 변수
  var basket = [];  // 인형을 담아서 터트리는 바구니
    
  for (var i = 0; i < moves.length; i++) {
  var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
        
      // 만약, 인형이 없는 빈칸이 아니라면
      if (board[j][now] != 0) {
        // 마지막에(이전에) 넣은 인형과, 지금 넣는 인형이 같으면 pop으로 제거해주고, result+2를 해준다.
        if (basket[basket.length - 1] === board[j][now]) {
          basket.pop();
          result += 2;
        // 두 인형이 다르면, 그냥 지금 넣는 인형을 새로 바구니에 추가해준다.(push)
        } else {
          basket.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return result;
}