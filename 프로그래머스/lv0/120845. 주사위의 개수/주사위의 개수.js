function solution(box, n) {
    
  /*   (가로 / n) * (세로 / n) * (높이 / n)   */ 
  // floor : 내림 함수  
  return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
  // 입출력 Ex) 3 * 2 * 2 = 12,  1 * 1 * 1 = 1
    
}
