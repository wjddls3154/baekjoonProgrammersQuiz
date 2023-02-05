function solution(hp) {
  // Ex) hp가 24라면, general = 24/5 = 4... 소수점 내림 → 4
  // soldier = 24 - 20 = 4 / 3 = 1... 소수점 내림 → 1
  // man = 24 - 20 - 3 = 1
  // 마지막 전부 더하기 4+1+1 = 6, 즉 hp가 24이면 최소 6마리의 개미가 필요.
  const general = Math.floor(hp / 5);
  const soldier = Math.floor((hp - general * 5) / 3);
  const man = hp - general * 5 - soldier * 3;
  return general + soldier + man;
}