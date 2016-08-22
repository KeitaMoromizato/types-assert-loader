var compile = require('types-assert/compiler').compile;

module.exports = function(content) {
  return compile(content);
};
