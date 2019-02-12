module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // own rules
    'no-multi-spaces': 0,
    'curly': 0,
    'no-multiple-empty-lines': 0,
    'padded-blocks': 0,
    'key-spacing': 0,
    'object-property-newline': 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'brace-style': 0,
    'semi': ["error", "always"],
    'eol-last': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'import/newline-after-import': ["error", { "count": 2 }],
  }
}
