function solution(emergency) {
    let sequence = emergency.slice().sort((a,b) => b-a);
    return emergency.map( x => sequence.indexOf(x)+1);
}
