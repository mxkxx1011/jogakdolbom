function getPieces(minutes: number) {
  const pieces = Math.floor(minutes / 10);

  return pieces;
}

export { getPieces };
