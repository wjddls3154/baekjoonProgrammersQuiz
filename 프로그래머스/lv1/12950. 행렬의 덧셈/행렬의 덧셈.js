// ◎
function solution(arr1, arr2) {
     return arr1.map( (a,i) => arr2[i].map( (b,j) => arr1[i][j]+arr2[i][j]))
}