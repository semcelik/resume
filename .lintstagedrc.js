module.exports = {
  'src/**/*.{js,ts,tsx}': ['prettier --write', './node_modules/.bin/eslint  --max-warnings=0'],
};
