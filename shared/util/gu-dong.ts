interface Props {
  address: string;
  onlyDong?: boolean;
  addSi?: boolean;
}

function getGuDong({ address, onlyDong, addSi }: Props) {
  const [si, gu, dong] = address.split(' ');

  if (addSi) {
    return `${si} ${gu} ${dong}`;
  }

  if (onlyDong) {
    return dong;
  }

  return `${gu} ${dong}`;
}

export { getGuDong };
