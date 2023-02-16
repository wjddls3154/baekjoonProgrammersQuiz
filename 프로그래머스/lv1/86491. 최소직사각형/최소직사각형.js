function solution(sizes) {
    let width = [];  // 가로
    let height = [];  // 세로
    
    // 반복문 이용해서, 제일 큰 값(maxSize)만 가로가 되도록, 제일 작은 값(minSize)만 세로가 되도록 두 값의 사이즈만 변경하고
    for(let i = 0; i < sizes.length; i++) {
        const maxSize = Math.max(sizes[i][0], sizes[i][1]);
        const minSize = Math.min(sizes[i][0], sizes[i][1]);
        width.push(maxSize);
        height.push(minSize);
    }
    // 각 바꾼 사이즈 값을 포함한 가로 길이 max 값과, 세로 길이 max 값을 곱해서 모든 명함이 들어갈 수 있는 최소 사이즈를 구했다.
    return Math.max(...width) * Math.max(...height);
    // Ex) 가장 큰 세로 길이인 70을, 가로 길이 30과 바꾸면, 가로 길이가 70 세로 길이가 30이 된다.
    // 그래서, 가로 길이의 max 값은 80이고, 세로 길이의 max 값은 50이기 때문에,
    // 이때, 모든 명함들을 수납할 수 있는 가장 작은 지갑의 크기는 80 x 50 = 4000이 되는것이다.
}