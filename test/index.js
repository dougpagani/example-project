var assert = require('assert')
const x = require('../index')

describe('Sum should add things together', () => {
    it('adds two numbers', () => {
        assert.equal(x.add(2,3), 5)
        assert.equal(x.add(2,5), 7)
        assert.equal(x.add(2,0), 2)
    });
});
