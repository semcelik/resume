function pxToNumber(size: string, defaultValue = 0 as number): number {
  if (size.endsWith('px')) {
    const sizeNumber = Number(size.replace('px', ''));
    if (!Number.isNaN(size)) {
      return sizeNumber;
    }
  }
  return defaultValue;
}

export default pxToNumber;
