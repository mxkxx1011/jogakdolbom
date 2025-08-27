function formatDate(date: string | Date) {
  let dateObj: Date;
  if (typeof date === 'string') {
    dateObj = new Date(date);
  } else {
    dateObj = date;
  }

  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = days[dateObj.getDay()];
  return `${month}월 ${day}일 (${dayOfWeek})`;
}

export { formatDate };
