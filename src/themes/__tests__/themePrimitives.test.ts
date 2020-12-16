import fs from 'fs';

import { LINE_BREAK } from 'constants/regex';

describe('themePrimitives', () => {
  const darkThemePrimitivesFileName = 'darkThemePrimitives';
  const lightThemePrimitivesFileName = 'lightThemePrimitives';
  const objectSplitter = ':';

  function getLines(fileName: string) {
    const startPoint = `const ${fileName}: TThemePrimitives = {`;
    const endPoint = '};';
    const lines = fs.readFileSync(`${__dirname}/../${fileName}.ts`).toString().split(LINE_BREAK);

    return lines.slice(lines.indexOf(startPoint) + 1, lines.indexOf(endPoint));
  }

  it('should have same theme colors on same line', () => {
    const darkLines = getLines(darkThemePrimitivesFileName);
    const lightLines = getLines(lightThemePrimitivesFileName);

    darkLines.forEach((line, i) => {
      const [darkPrimitiveObjectKey] = line.split(objectSplitter);
      const [lightPrimitiveObjectKey] = lightLines[i].split(objectSplitter);
      expect(darkPrimitiveObjectKey).toBe(lightPrimitiveObjectKey);
    });
  });
});
