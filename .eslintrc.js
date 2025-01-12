module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    camelcase: [{ properties: 'never' }]
  }
}
