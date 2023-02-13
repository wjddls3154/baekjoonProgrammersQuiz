function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [aDiff, bDiff] = [Math.abs(a-n), Math.abs(b-n)];
        
        // 만약, n으로부터의 거리가 같으면, 숫자의 크기가 더 큰수를 배열의 앞에 오도록 배치한다.
        if(aDiff === bDiff) return b-a;
     
        // 만약, n으로부터의 거리가 다르다면, n으로부터 가까운 순서대로 정렬하도록 오름차순으로 정렬
        return aDiff-bDiff;
    })
}