/** [start,end) 반열린구간 교차 여부 (30분 그리드 가정) */
function intersects(aS: Date, aE: Date, bS: Date, bE: Date) {
  return aS < bE && bS < aE;
}

export { intersects };
