module.exports = {
  ...require('@open-wc/prettier-config'),
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json-stringify',
      },
    },
  ],
};
