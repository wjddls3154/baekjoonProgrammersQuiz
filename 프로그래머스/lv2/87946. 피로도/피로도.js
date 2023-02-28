// ◎
function solution(k, dungeons) {
  let result = 0; 
  
  // 던전을 방문했는지 확인하기 위한 배열
  const visited = Array.from({ length: dungeons.length }, () => false);

  // 완전탐색을 위한 DFS (남은 피로도, 진행단계)
  function DFS(P, D) {

    // 던전의 수 만큼 반복문을 돌린다.
    for (let i = 0; i < dungeons.length; i++) {

      // 해당 던전을 방문하지 않았고 & 현재 남은 피로도가, 최소한으로 필요한 필요도 보다 크거나 같으면 방문할 수 있다.
      if (!visited[i] && dungeons[i][0] <= P) {
        visited[i] = true;  // 현재 던전에 들어왔으니,  방문 처리를 true 로 한다.

        // DFS (현재 피로도 - 방문 던전, 진행단계 + 1) 실행
        DFS(P - dungeons[i][1], D + 1);

        // DFS 종료 후, 방문을 끝내준다.
        visited[i] = false;
      }
    }

    // 최대로 탐험한 던전수를 result에 넣어준다.
    result = Math.max(result, D);
  }

  // DFS 실행  
  DFS(k, 0);

  return result;  // 결과 값 반환
}
