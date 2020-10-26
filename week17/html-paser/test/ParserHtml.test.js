// import assert from 'assert';
const assert = require('assert');
// const { add, mul } = require('../add');
// import { parseHTML } from '../src/ParserHtml';
const parseHTML = require("../src/ParserHtml");

describe("pase css rule", function () {
     it(" <style>#container {width:500px;height:300px;display:flex;}</style>", function () {
        const tree = parseHTML("<style>#container {width:500px;height:300px;display:flex;}</style>");
        // console.log("d===>", tree[0].children);
        assert.equal(tree[0].children[0].tagName, "style");
    });

    it("<style>&container {display:flex;}</style>", function () {
        const tree = parseHTML("<style>&container {display:flex;}</style>");
        // console.log("d===>", tree[0].children);
        assert.equal(tree[0].children[0].tagName, "style");
    });

    it("<style>.container {display:flex;}</style>", function () {
        const tree = parseHTML("<style>.container {display:flex;}</style>");
        // console.log("d===>", tree[0].children);
        assert.equal(tree[0].children[0].tagName, "style");
    });

    it("<style>.container div {display:flex;}</style>", function () {
        const tree = parseHTML("<style>.container div {display:flex;}</style>");
        // console.log("d===>", tree[0].children);
        assert.equal(tree[0].children[0].tagName, "style");
    });

    it("<style>.container.some {display:flex;}</style>", function () {
        const tree = parseHTML("<style>.container .some {display:flex;}</style>");
        // console.log("d===>", tree[0].children);
        assert.equal(tree[0].children[0].tagName, "style");
    });
});


describe('parser html function unit test', function () {
    it("<a></a> should return a children and tagName is a. the children of children length should be 0", function () {
        const tree = parseHTML("<a></a>");
        // console.log("d===>", tree[0].children);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
    });

    it("<a href='//time.geekbbang.org'></a>", function () {
        const tree = parseHTML("<a href='//time.geekbbang.org' ></a>");
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 1);
        assert.equal(tree[0].children[0].attributes[0].name, "href");
        assert.equal(tree[0].children[0].attributes[0].value, "//time.geekbbang.org");
    });

    it("<a href ></a>", function () {
        const tree = parseHTML("<a href ></a>");
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 1);
        assert.equal(tree[0].children[0].attributes[0].name, "href");
    });

    it("<a href id ></a>", function () {
        const tree = parseHTML("<a href id></a>");
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 2);
        assert.equal(tree[0].children[0].attributes[0].name, "href");
        assert.equal(tree[0].children[0].attributes[1].name, "id");
    });

    it("<a href='abc' id ></a>", function () {
        const tree = parseHTML("<a href='abc' id ></a>");
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 2);
        assert.equal(tree[0].children[0].attributes[0].name, "href");
        assert.equal(tree[0].children[0].attributes[1].name, "id");
        assert.equal(tree[0].children[0].attributes[0].value, "abc");
    });

    it('<a href="abc" id ></a>', function () {
        const tree = parseHTML('<a href="abc" id ></a>');
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 2);
        assert.equal(tree[0].children[0].attributes[0].name, "href");
        assert.equal(tree[0].children[0].attributes[1].name, "id");
        assert.equal(tree[0].children[0].attributes[0].value, "abc");
    });

    // Todo:
    it('<a id=abc ></a>', function () {
        const tree = parseHTML('<a id=abc ></a>');
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 1);
        assert.equal(tree[0].children[0].attributes[0].name, "id");
        assert.equal(tree[0].children[0].attributes[0].value, "bc");
    });

    // Todo:
    it('<a id=abc />', function () {
        const tree = parseHTML('<a id=abc />');
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
        assert.equal(tree[0].children[0].attributes.length, 2);
        assert.equal(tree[0].children[0].attributes[0].name, "id");
        assert.equal(tree[0].children[0].attributes[0].value, "bc");
        assert.equal(tree[0].children[0].attributes[1].name, "isSelfClosing");
    });


    it('<a />', function () {
        const tree = parseHTML('<a />');
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
    });

    it('<A /> uppercase', function () {
        const tree = parseHTML('<A />');
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].tagName, "a");
        assert.equal(tree[0].children[0].children.length, 0);
    });

    it('<>', function () {
        const tree = parseHTML('<>');
        // console.log("d===>", tree[0].children[0].attributes);
        assert.equal(tree[0].children[0].type, "text");
    });
    it('<a>  s  </b>', function () {
        try{

            const tree = parseHTML('<a>  s  </b>');
        } catch (e) {
            assert.equal(e.message, "Tag start end don't match!")
        }



    });
});