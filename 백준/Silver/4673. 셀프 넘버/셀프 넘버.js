// ◎
let arr = Array(10001).fill(false);
let n = 1;
while (n<10000) {
    arr[n+(n+'').split('').reduce((a,c)=>a+ +c,0)]=true;
    n++;
}
let r = [];
arr.forEach((v,i) => {
    if (!v) r.push(i);
})
console.log(r.slice(1).join('\n'));