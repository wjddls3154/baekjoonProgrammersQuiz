const INPUT_FILE = process.platform === 'linux' ? 'dev/stdin' : './input';

// 특별과제 제출한 학생들의 출석번호를 입력받음
let submittedStudents = require('fs').readFileSync(INPUT_FILE).toString().trim()
  .split('\n')
  .map(Number);

// 특별과제 제출한 학생들의 출석번호를 set 으로 만들면, 번호가 중복이 안되는 데이터 집합.
submittedStudents = new Set(submittedStudents);

// 번호는 1번부터 30번까지 체크한다. 
// 만약, 출석번호가 없으면 그 번호를 출력한다.
for (let student = 1; student <= 30; student += 1) {
  if (!submittedStudents.has(student)) console.log(student);
}
