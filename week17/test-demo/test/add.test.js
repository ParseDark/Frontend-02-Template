// import assert from 'assert';
import { add, mul }from '../add'
const assert = require('assert');
// const { add, mul } = require('../add');

describe('add function unit test', function () {
    it("should return 3 when 1 add 2", function () {
        assert.equal(add(1, 2), 3);
    });

    it("should return 4 when 2 add 2", function () {
        assert.equal(add(2, 2), 4);
    });
});

describe('mul function unit test', function () {
    it("should return 2 when 1 mul 2", function () {
        assert.equal(mul(1, 2), 2);
    });

    it("should return 4 when 2 mul 2", function () {
        assert.equal(mul(2, 2), 4);
    });
});