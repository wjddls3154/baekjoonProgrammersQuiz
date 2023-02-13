// ◎
function solution(keyinput, board) {

  // 이동 방향 값
  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  
  // board 의 최대 이동 가능거리 
  const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  
  // x와 y의 값이 최대 설정 범위인 rangeX와 rangeY를 넘어간다면,
  return keyinput
    .map(key => moves[key])
    .reduce(
      ([x, y], [mX, mY]) => (Math.abs(x + mX) > rangeX || Math.abs(y + mY) > rangeY ? [x, y] : [x + mX, y + mY]),
      [0, 0]
    );
}