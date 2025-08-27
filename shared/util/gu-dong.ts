function getGuDong(address: string) {
  const [_, gu, dong] = address.split(' ');

  return `${gu} ${dong}`;
}

export { getGuDong };
