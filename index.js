var compileFromString = require('types-assert/compiler').compileFromString;

module.exports = function(content) {
  return 'module.exports = ' + JSON.stringify(compileFromString(content));
};
