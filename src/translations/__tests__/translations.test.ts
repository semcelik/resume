import fs from 'fs';

import { LINE_BREAK } from 'constants/regex';

describe('translations', () => {
  const enLanguageFileName = 'en';
  const trLanguageFileName = 'tr';
  const objectSplitter = ':';

  function getLines(fileName: string) {
    const lines = fs.readFileSync(`${__dirname}/../${fileName}.json`).toString().split(LINE_BREAK);

    return lines.slice(lines.indexOf('{') + 1, lines.indexOf('};'));
  }

  it('should have same key name on same line', () => {
    const enLines = getLines(enLanguageFileName);
    const trLines = getLines(trLanguageFileName);

    enLines.forEach((enLine, i) => {
      const [enObjectKey] = enLine.split(objectSplitter);
      const [trObjectKey] = trLines[i].split(objectSplitter);

      expect(enObjectKey).toBe(trObjectKey);
    });
  });
});
