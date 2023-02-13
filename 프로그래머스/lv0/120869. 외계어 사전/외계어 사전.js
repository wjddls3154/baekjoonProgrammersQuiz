function solution(spell, dic) {
    // 주어진 단어를, 사전순으로 정렬
    spell = spell.sort().join("");
    
    // dic배열의 요소를 모두 정렬하고, spell 의 알파벳을 한번씩만 모두 사용한 요소가 있다면 1을 반환, 없다면 2를 반환
    return dic.map( x => x.split("").sort().join("")).find( a => a === spell) !== undefined ? 1 : 2;
}