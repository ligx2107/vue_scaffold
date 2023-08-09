const assert = require('assert');
const {sum, sort} = require('../src/demos/demo');

describe('test sum', function() {
    it('test sum', function(done) {
        assert.equal(sum(1, 2), 3);
        done();
    })
})

describe('test sort', function() {
    it('test sort', function(done) {
        assert.deepEqual(sort([3, 2, 1]), [1, 2, 3]);
        done();
    })
})


describe('test add', function() {
    it('test add', function(done) {
        assert.equal(add(1, 2), 3);
        done();
    })
})