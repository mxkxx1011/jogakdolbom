function diffMinutes(start: string | Date, end: string | Date) {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();

  const diff = endTime - startTime;

  return Math.floor(diff / (1000 * 60));
}

export { diffMinutes };
