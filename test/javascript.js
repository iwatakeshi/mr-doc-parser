/* eslint-env mocha */
const assert = require('chai').assert;
const Parser = require('../');
const Option = require('mr-doc-utils').Option;

const parser = new Parser(Option.defaults).factory();

describe('parser', () => {
  const source = `
    /**
     * @desc - Greet the user. 
     */
    function greet() {
      return 'Hello';
    }
  `;
  it('should return an object containing the parsed comments', () => {
    const result = parser.parse({ source });
    assert.isArray(result);
    assert.isTrue(result.length === 1);
  });
});
