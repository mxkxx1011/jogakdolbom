function parseHM(hm: string) {
  const [h, m] = hm.split(':').map(Number);
  return { h, m };
}

export { parseHM };
