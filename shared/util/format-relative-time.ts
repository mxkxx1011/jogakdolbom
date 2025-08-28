function formatRelativeTime(date: Date | string) {
  let dateObj: Date;

  if (typeof date === 'string') {
    dateObj = new Date(date);
  } else {
    dateObj = date;
  }

  const now = new Date();
  const diff = now.getTime() - dateObj.getTime();

  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }
  if (diffDays < 30) {
    return `${diffDays}일 전`;
  }
  if (diffMonths < 12) {
    return `${diffMonths}개월 전`;
  }
  return `${diffYears}년 전`;
}

export { formatRelativeTime };
