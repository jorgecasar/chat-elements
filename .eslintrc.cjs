module.exports = {
  extends: [
    '@open-wc/eslint-config',
    'eslint-config-prettier',
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    'jsdoc'
  ],
  rules: {
    "import/extensions": [ "error", "always", { ignorePackages: true }],
    "import/prefer-default-export": "off",
    'wc/guard-super-call': 'off', // types will prevent you from calling the super if it's not in the base class, making the guard unnecessary
    'no-await-in-loop': 'off',
    'import/no-unresolved': 'off', // eslint not smart enough atm to understand package exports maps
    'no-underscore-dangle': 'off'
  }
};