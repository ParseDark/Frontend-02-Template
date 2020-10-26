"use strict";

function cov_1trbinkzc7() {
  var path = "/Users/weihaidong/Project/Frontend-02-Template/week17/html-paser/src/index.js";
  var hash = "6761d2c7e7881e926c3f3deb47b82fbd0d624259";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/weihaidong/Project/Frontend-02-Template/week17/html-paser/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 1,
          column: 38
        }
      },
      "1": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 2,
          column: 52
        }
      },
      "2": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 34
        }
      },
      "3": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 39
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6761d2c7e7881e926c3f3deb47b82fbd0d624259"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1trbinkzc7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1trbinkzc7();
var parser = (cov_1trbinkzc7().s[0]++, require('./ParserHtml'));

var _ref = (cov_1trbinkzc7().s[1]++, require('./ResponseParse')),
    ResponseParse = _ref.ResponseParse;

var render = (cov_1trbinkzc7().s[2]++, require('./render'));
cov_1trbinkzc7().s[3]++;
parser("<a href='www.baidu.com'>a</a>");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHTML = void 0;

function cov_8o9uht0n8() {
  var path = "/Users/weihaidong/Project/Frontend-02-Template/week17/html-paser/src/ParserHtml.js";
  var hash = "50cde81da7f23d3c03987d2bbe2c7d354f670aaf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/weihaidong/Project/Frontend-02-Template/week17/html-paser/src/ParserHtml.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 1,
          column: 26
        }
      },
      "1": {
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 25
        }
      },
      "2": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 37
        }
      },
      "3": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 23
        }
      },
      "4": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 6,
          column: 27
        }
      },
      "5": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 26
        }
      },
      "6": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "7": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 14
        }
      },
      "8": {
        start: {
          line: 13,
          column: 14
        },
        end: {
          line: 13,
          column: 29
        }
      },
      "9": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 51
        }
      },
      "10": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 40
        }
      },
      "11": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "12": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 21
        }
      },
      "13": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "14": {
        start: {
          line: 28,
          column: 19
        },
        end: {
          line: 28,
          column: 75
        }
      },
      "15": {
        start: {
          line: 28,
          column: 53
        },
        end: {
          line: 28,
          column: 71
        }
      },
      "16": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "17": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 30,
          column: 24
        }
      },
      "18": {
        start: {
          line: 32,
          column: 11
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "19": {
        start: {
          line: 33,
          column: 19
        },
        end: {
          line: 33,
          column: 78
        }
      },
      "20": {
        start: {
          line: 33,
          column: 53
        },
        end: {
          line: 33,
          column: 74
        }
      },
      "21": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "22": {
        start: {
          line: 35,
          column: 12
        },
        end: {
          line: 35,
          column: 24
        }
      },
      "23": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 40,
          column: 9
        }
      },
      "24": {
        start: {
          line: 39,
          column: 12
        },
        end: {
          line: 39,
          column: 24
        }
      },
      "25": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 17
        }
      },
      "26": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 24
        }
      },
      "27": {
        start: {
          line: 47,
          column: 24
        },
        end: {
          line: 47,
          column: 43
        }
      },
      "28": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "29": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "30": {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 50,
          column: 22
        }
      },
      "31": {
        start: {
          line: 51,
          column: 15
        },
        end: {
          line: 55,
          column: 9
        }
      },
      "32": {
        start: {
          line: 52,
          column: 12
        },
        end: {
          line: 52,
          column: 22
        }
      },
      "33": {
        start: {
          line: 54,
          column: 12
        },
        end: {
          line: 54,
          column: 22
        }
      },
      "34": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 13
        }
      },
      "35": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "36": {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 31
        }
      },
      "37": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "38": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 31
        }
      },
      "39": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 69,
          column: 5
        }
      },
      "40": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 31
        }
      },
      "41": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 27
        }
      },
      "42": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 23
        }
      },
      "43": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 53
        }
      },
      "44": {
        start: {
          line: 77,
          column: 19
        },
        end: {
          line: 77,
          column: 42
        }
      },
      "45": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "46": {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 35
        }
      },
      "47": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 126,
          column: 5
        }
      },
      "48": {
        start: {
          line: 86,
          column: 28
        },
        end: {
          line: 86,
          column: 66
        }
      },
      "49": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 89,
          column: 9
        }
      },
      "50": {
        start: {
          line: 88,
          column: 12
        },
        end: {
          line: 88,
          column: 21
        }
      },
      "51": {
        start: {
          line: 91,
          column: 22
        },
        end: {
          line: 91,
          column: 27
        }
      },
      "52": {
        start: {
          line: 93,
          column: 16
        },
        end: {
          line: 93,
          column: 17
        }
      },
      "53": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 99,
          column: 9
        }
      },
      "54": {
        start: {
          line: 95,
          column: 21
        },
        end: {
          line: 95,
          column: 22
        }
      },
      "55": {
        start: {
          line: 96,
          column: 12
        },
        end: {
          line: 98,
          column: 13
        }
      },
      "56": {
        start: {
          line: 97,
          column: 16
        },
        end: {
          line: 97,
          column: 20
        }
      },
      "57": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 103,
          column: 9
        }
      },
      "58": {
        start: {
          line: 102,
          column: 12
        },
        end: {
          line: 102,
          column: 27
        }
      },
      "59": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 123,
          column: 9
        }
      },
      "60": {
        start: {
          line: 107,
          column: 12
        },
        end: {
          line: 107,
          column: 66
        }
      },
      "61": {
        start: {
          line: 108,
          column: 21
        },
        end: {
          line: 108,
          column: 51
        }
      },
      "62": {
        start: {
          line: 109,
          column: 32
        },
        end: {
          line: 109,
          column: 53
        }
      },
      "63": {
        start: {
          line: 110,
          column: 12
        },
        end: {
          line: 122,
          column: 13
        }
      },
      "64": {
        start: {
          line: 111,
          column: 16
        },
        end: {
          line: 113,
          column: 17
        }
      },
      "65": {
        start: {
          line: 112,
          column: 20
        },
        end: {
          line: 112,
          column: 61
        }
      },
      "66": {
        start: {
          line: 114,
          column: 16
        },
        end: {
          line: 120,
          column: 17
        }
      },
      "67": {
        start: {
          line: 115,
          column: 20
        },
        end: {
          line: 115,
          column: 82
        }
      },
      "68": {
        start: {
          line: 116,
          column: 20
        },
        end: {
          line: 116,
          column: 73
        }
      },
      "69": {
        start: {
          line: 117,
          column: 23
        },
        end: {
          line: 120,
          column: 17
        }
      },
      "70": {
        start: {
          line: 118,
          column: 20
        },
        end: {
          line: 118,
          column: 82
        }
      },
      "71": {
        start: {
          line: 119,
          column: 20
        },
        end: {
          line: 119,
          column: 73
        }
      },
      "72": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 130,
          column: 23
        }
      },
      "73": {
        start: {
          line: 132,
          column: 14
        },
        end: {
          line: 132,
          column: 37
        }
      },
      "74": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 184,
          column: 5
        }
      },
      "75": {
        start: {
          line: 135,
          column: 22
        },
        end: {
          line: 139,
          column: 9
        }
      },
      "76": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 141,
          column: 40
        }
      },
      "77": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 150,
          column: 9
        }
      },
      "78": {
        start: {
          line: 144,
          column: 12
        },
        end: {
          line: 149,
          column: 13
        }
      },
      "79": {
        start: {
          line: 145,
          column: 16
        },
        end: {
          line: 148,
          column: 19
        }
      },
      "80": {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 152,
          column: 28
        }
      },
      "81": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 35
        }
      },
      "82": {
        start: {
          line: 155,
          column: 8
        },
        end: {
          line: 155,
          column: 29
        }
      },
      "83": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 159,
          column: 9
        }
      },
      "84": {
        start: {
          line: 158,
          column: 12
        },
        end: {
          line: 158,
          column: 32
        }
      },
      "85": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 31
        }
      },
      "86": {
        start: {
          line: 163,
          column: 11
        },
        end: {
          line: 184,
          column: 5
        }
      },
      "87": {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 173,
          column: 9
        }
      },
      "88": {
        start: {
          line: 165,
          column: 12
        },
        end: {
          line: 165,
          column: 58
        }
      },
      "89": {
        start: {
          line: 168,
          column: 12
        },
        end: {
          line: 170,
          column: 13
        }
      },
      "90": {
        start: {
          line: 169,
          column: 16
        },
        end: {
          line: 169,
          column: 53
        }
      },
      "91": {
        start: {
          line: 171,
          column: 12
        },
        end: {
          line: 171,
          column: 24
        }
      },
      "92": {
        start: {
          line: 172,
          column: 12
        },
        end: {
          line: 172,
          column: 24
        }
      },
      "93": {
        start: {
          line: 174,
          column: 8
        },
        end: {
          line: 174,
          column: 31
        }
      },
      "94": {
        start: {
          line: 175,
          column: 11
        },
        end: {
          line: 184,
          column: 5
        }
      },
      "95": {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 182,
          column: 9
        }
      },
      "96": {
        start: {
          line: 177,
          column: 12
        },
        end: {
          line: 180,
          column: 13
        }
      },
      "97": {
        start: {
          line: 181,
          column: 12
        },
        end: {
          line: 181,
          column: 47
        }
      },
      "98": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 49
        }
      },
      "99": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 201,
          column: 5
        }
      },
      "100": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 23
        }
      },
      "101": {
        start: {
          line: 190,
          column: 11
        },
        end: {
          line: 201,
          column: 5
        }
      },
      "102": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 193,
          column: 11
        }
      },
      "103": {
        start: {
          line: 194,
          column: 8
        },
        end: {
          line: 194,
          column: 15
        }
      },
      "104": {
        start: {
          line: 196,
          column: 8
        },
        end: {
          line: 199,
          column: 11
        }
      },
      "105": {
        start: {
          line: 200,
          column: 8
        },
        end: {
          line: 200,
          column: 20
        }
      },
      "106": {
        start: {
          line: 205,
          column: 4
        },
        end: {
          line: 215,
          column: 5
        }
      },
      "107": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 206,
          column: 26
        }
      },
      "108": {
        start: {
          line: 207,
          column: 11
        },
        end: {
          line: 215,
          column: 5
        }
      },
      "109": {
        start: {
          line: 208,
          column: 8
        },
        end: {
          line: 211,
          column: 10
        }
      },
      "110": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 212,
          column: 26
        }
      },
      "111": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 214,
          column: 15
        }
      },
      "112": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 231,
          column: 5
        }
      },
      "113": {
        start: {
          line: 220,
          column: 8
        },
        end: {
          line: 223,
          column: 10
        }
      },
      "114": {
        start: {
          line: 224,
          column: 8
        },
        end: {
          line: 224,
          column: 26
        }
      },
      "115": {
        start: {
          line: 225,
          column: 11
        },
        end: {
          line: 231,
          column: 5
        }
      },
      "116": {
        start: {
          line: 227,
          column: 11
        },
        end: {
          line: 231,
          column: 5
        }
      },
      "117": {
        start: {
          line: 235,
          column: 4
        },
        end: {
          line: 247,
          column: 5
        }
      },
      "118": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 236,
          column: 35
        }
      },
      "119": {
        start: {
          line: 237,
          column: 11
        },
        end: {
          line: 247,
          column: 5
        }
      },
      "120": {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 238,
          column: 35
        }
      },
      "121": {
        start: {
          line: 239,
          column: 11
        },
        end: {
          line: 247,
          column: 5
        }
      },
      "122": {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 240,
          column: 34
        }
      },
      "123": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 241,
          column: 23
        }
      },
      "124": {
        start: {
          line: 242,
          column: 11
        },
        end: {
          line: 247,
          column: 5
        }
      },
      "125": {
        start: {
          line: 243,
          column: 8
        },
        end: {
          line: 243,
          column: 27
        }
      },
      "126": {
        start: {
          line: 244,
          column: 8
        },
        end: {
          line: 244,
          column: 20
        }
      },
      "127": {
        start: {
          line: 246,
          column: 8
        },
        end: {
          line: 246,
          column: 23
        }
      },
      "128": {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 263,
          column: 5
        }
      },
      "129": {
        start: {
          line: 252,
          column: 8
        },
        end: {
          line: 252,
          column: 35
        }
      },
      "130": {
        start: {
          line: 253,
          column: 11
        },
        end: {
          line: 263,
          column: 5
        }
      },
      "131": {
        start: {
          line: 254,
          column: 8
        },
        end: {
          line: 254,
          column: 36
        }
      },
      "132": {
        start: {
          line: 255,
          column: 11
        },
        end: {
          line: 263,
          column: 5
        }
      },
      "133": {
        start: {
          line: 258,
          column: 8
        },
        end: {
          line: 261,
          column: 9
        }
      },
      "134": {
        start: {
          line: 262,
          column: 8
        },
        end: {
          line: 262,
          column: 32
        }
      },
      "135": {
        start: {
          line: 267,
          column: 4
        },
        end: {
          line: 278,
          column: 5
        }
      },
      "136": {
        start: {
          line: 268,
          column: 8
        },
        end: {
          line: 268,
          column: 37
        }
      },
      "137": {
        start: {
          line: 269,
          column: 11
        },
        end: {
          line: 278,
          column: 5
        }
      },
      "138": {
        start: {
          line: 270,
          column: 8
        },
        end: {
          line: 270,
          column: 36
        }
      },
      "139": {
        start: {
          line: 271,
          column: 11
        },
        end: {
          line: 278,
          column: 5
        }
      },
      "140": {
        start: {
          line: 273,
          column: 11
        },
        end: {
          line: 278,
          column: 5
        }
      },
      "141": {
        start: {
          line: 276,
          column: 8
        },
        end: {
          line: 276,
          column: 35
        }
      },
      "142": {
        start: {
          line: 277,
          column: 8
        },
        end: {
          line: 277,
          column: 29
        }
      },
      "143": {
        start: {
          line: 282,
          column: 4
        },
        end: {
          line: 292,
          column: 5
        }
      },
      "144": {
        start: {
          line: 283,
          column: 8
        },
        end: {
          line: 283,
          column: 39
        }
      },
      "145": {
        start: {
          line: 284,
          column: 11
        },
        end: {
          line: 292,
          column: 5
        }
      },
      "146": {
        start: {
          line: 285,
          column: 8
        },
        end: {
          line: 285,
          column: 42
        }
      },
      "147": {
        start: {
          line: 286,
          column: 11
        },
        end: {
          line: 292,
          column: 5
        }
      },
      "148": {
        start: {
          line: 287,
          column: 8
        },
        end: {
          line: 287,
          column: 42
        }
      },
      "149": {
        start: {
          line: 288,
          column: 11
        },
        end: {
          line: 292,
          column: 5
        }
      },
      "150": {
        start: {
          line: 291,
          column: 8
        },
        end: {
          line: 291,
          column: 38
        }
      },
      "151": {
        start: {
          line: 297,
          column: 4
        },
        end: {
          line: 307,
          column: 5
        }
      },
      "152": {
        start: {
          line: 298,
          column: 8
        },
        end: {
          line: 298,
          column: 69
        }
      },
      "153": {
        start: {
          line: 299,
          column: 8
        },
        end: {
          line: 299,
          column: 41
        }
      },
      "154": {
        start: {
          line: 300,
          column: 11
        },
        end: {
          line: 307,
          column: 5
        }
      },
      "155": {
        start: {
          line: 302,
          column: 11
        },
        end: {
          line: 307,
          column: 5
        }
      },
      "156": {
        start: {
          line: 305,
          column: 8
        },
        end: {
          line: 305,
          column: 36
        }
      },
      "157": {
        start: {
          line: 306,
          column: 8
        },
        end: {
          line: 306,
          column: 42
        }
      },
      "158": {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 321,
          column: 5
        }
      },
      "159": {
        start: {
          line: 312,
          column: 8
        },
        end: {
          line: 312,
          column: 69
        }
      },
      "160": {
        start: {
          line: 313,
          column: 8
        },
        end: {
          line: 313,
          column: 41
        }
      },
      "161": {
        start: {
          line: 314,
          column: 11
        },
        end: {
          line: 321,
          column: 5
        }
      },
      "162": {
        start: {
          line: 316,
          column: 11
        },
        end: {
          line: 321,
          column: 5
        }
      },
      "163": {
        start: {
          line: 319,
          column: 8
        },
        end: {
          line: 319,
          column: 36
        }
      },
      "164": {
        start: {
          line: 320,
          column: 8
        },
        end: {
          line: 320,
          column: 42
        }
      },
      "165": {
        start: {
          line: 325,
          column: 4
        },
        end: {
          line: 338,
          column: 5
        }
      },
      "166": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 326,
          column: 35
        }
      },
      "167": {
        start: {
          line: 327,
          column: 11
        },
        end: {
          line: 338,
          column: 5
        }
      },
      "168": {
        start: {
          line: 328,
          column: 8
        },
        end: {
          line: 328,
          column: 35
        }
      },
      "169": {
        start: {
          line: 329,
          column: 11
        },
        end: {
          line: 338,
          column: 5
        }
      },
      "170": {
        start: {
          line: 330,
          column: 8
        },
        end: {
          line: 330,
          column: 69
        }
      },
      "171": {
        start: {
          line: 331,
          column: 8
        },
        end: {
          line: 331,
          column: 27
        }
      },
      "172": {
        start: {
          line: 332,
          column: 8
        },
        end: {
          line: 332,
          column: 20
        }
      },
      "173": {
        start: {
          line: 333,
          column: 11
        },
        end: {
          line: 338,
          column: 5
        }
      },
      "174": {
        start: {
          line: 336,
          column: 8
        },
        end: {
          line: 336,
          column: 36
        }
      },
      "175": {
        start: {
          line: 337,
          column: 8
        },
        end: {
          line: 337,
          column: 42
        }
      },
      "176": {
        start: {
          line: 342,
          column: 4
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "177": {
        start: {
          line: 343,
          column: 8
        },
        end: {
          line: 343,
          column: 69
        }
      },
      "178": {
        start: {
          line: 344,
          column: 8
        },
        end: {
          line: 344,
          column: 35
        }
      },
      "179": {
        start: {
          line: 345,
          column: 11
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "180": {
        start: {
          line: 346,
          column: 8
        },
        end: {
          line: 346,
          column: 69
        }
      },
      "181": {
        start: {
          line: 347,
          column: 8
        },
        end: {
          line: 347,
          column: 35
        }
      },
      "182": {
        start: {
          line: 348,
          column: 11
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "183": {
        start: {
          line: 349,
          column: 8
        },
        end: {
          line: 349,
          column: 69
        }
      },
      "184": {
        start: {
          line: 350,
          column: 8
        },
        end: {
          line: 350,
          column: 27
        }
      },
      "185": {
        start: {
          line: 351,
          column: 8
        },
        end: {
          line: 351,
          column: 20
        }
      },
      "186": {
        start: {
          line: 352,
          column: 11
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "187": {
        start: {
          line: 354,
          column: 11
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "188": {
        start: {
          line: 356,
          column: 11
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "189": {
        start: {
          line: 359,
          column: 8
        },
        end: {
          line: 359,
          column: 36
        }
      },
      "190": {
        start: {
          line: 360,
          column: 8
        },
        end: {
          line: 360,
          column: 38
        }
      },
      "191": {
        start: {
          line: 367,
          column: 4
        },
        end: {
          line: 375,
          column: 5
        }
      },
      "192": {
        start: {
          line: 368,
          column: 8
        },
        end: {
          line: 368,
          column: 42
        }
      },
      "193": {
        start: {
          line: 369,
          column: 8
        },
        end: {
          line: 369,
          column: 27
        }
      },
      "194": {
        start: {
          line: 370,
          column: 8
        },
        end: {
          line: 370,
          column: 20
        }
      },
      "195": {
        start: {
          line: 371,
          column: 11
        },
        end: {
          line: 375,
          column: 5
        }
      },
      "196": {
        start: {
          line: 379,
          column: 4
        },
        end: {
          line: 398,
          column: 5
        }
      },
      "197": {
        start: {
          line: 380,
          column: 8
        },
        end: {
          line: 380,
          column: 34
        }
      },
      "198": {
        start: {
          line: 381,
          column: 11
        },
        end: {
          line: 398,
          column: 5
        }
      },
      "199": {
        start: {
          line: 382,
          column: 8
        },
        end: {
          line: 382,
          column: 35
        }
      },
      "200": {
        start: {
          line: 383,
          column: 11
        },
        end: {
          line: 398,
          column: 5
        }
      },
      "201": {
        start: {
          line: 384,
          column: 8
        },
        end: {
          line: 384,
          column: 36
        }
      },
      "202": {
        start: {
          line: 385,
          column: 11
        },
        end: {
          line: 398,
          column: 5
        }
      },
      "203": {
        start: {
          line: 386,
          column: 8
        },
        end: {
          line: 386,
          column: 69
        }
      },
      "204": {
        start: {
          line: 387,
          column: 8
        },
        end: {
          line: 387,
          column: 27
        }
      },
      "205": {
        start: {
          line: 388,
          column: 8
        },
        end: {
          line: 388,
          column: 20
        }
      },
      "206": {
        start: {
          line: 389,
          column: 11
        },
        end: {
          line: 398,
          column: 5
        }
      },
      "207": {
        start: {
          line: 392,
          column: 8
        },
        end: {
          line: 392,
          column: 69
        }
      },
      "208": {
        start: {
          line: 393,
          column: 8
        },
        end: {
          line: 396,
          column: 10
        }
      },
      "209": {
        start: {
          line: 397,
          column: 8
        },
        end: {
          line: 397,
          column: 32
        }
      },
      "210": {
        start: {
          line: 401,
          column: 25
        },
        end: {
          line: 408,
          column: 1
        }
      },
      "211": {
        start: {
          line: 402,
          column: 16
        },
        end: {
          line: 402,
          column: 20
        }
      },
      "212": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 405,
          column: 5
        }
      },
      "213": {
        start: {
          line: 404,
          column: 8
        },
        end: {
          line: 404,
          column: 25
        }
      },
      "214": {
        start: {
          line: 406,
          column: 4
        },
        end: {
          line: 406,
          column: 23
        }
      },
      "215": {
        start: {
          line: 407,
          column: 4
        },
        end: {
          line: 407,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "addCSSRules",
        decl: {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 20
          }
        },
        loc: {
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "match",
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 14
          }
        },
        loc: {
          start: {
            line: 22,
            column: 34
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 28,
            column: 45
          },
          end: {
            line: 28,
            column: 46
          }
        },
        loc: {
          start: {
            line: 28,
            column: 53
          },
          end: {
            line: 28,
            column: 71
          }
        },
        line: 28
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 33,
            column: 45
          },
          end: {
            line: 33,
            column: 46
          }
        },
        loc: {
          start: {
            line: 33,
            column: 53
          },
          end: {
            line: 33,
            column: 74
          }
        },
        line: 33
      },
      "4": {
        name: "specificity",
        decl: {
          start: {
            line: 45,
            column: 9
          },
          end: {
            line: 45,
            column: 20
          }
        },
        loc: {
          start: {
            line: 45,
            column: 31
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 45
      },
      "5": {
        name: "compare",
        decl: {
          start: {
            line: 60,
            column: 9
          },
          end: {
            line: 60,
            column: 16
          }
        },
        loc: {
          start: {
            line: 60,
            column: 27
          },
          end: {
            line: 72,
            column: 1
          }
        },
        line: 60
      },
      "6": {
        name: "computeCSS",
        decl: {
          start: {
            line: 74,
            column: 9
          },
          end: {
            line: 74,
            column: 19
          }
        },
        loc: {
          start: {
            line: 74,
            column: 29
          },
          end: {
            line: 127,
            column: 1
          }
        },
        line: 74
      },
      "7": {
        name: "emit",
        decl: {
          start: {
            line: 129,
            column: 9
          },
          end: {
            line: 129,
            column: 13
          }
        },
        loc: {
          start: {
            line: 129,
            column: 21
          },
          end: {
            line: 185,
            column: 1
          }
        },
        line: 129
      },
      "8": {
        name: "data",
        decl: {
          start: {
            line: 187,
            column: 9
          },
          end: {
            line: 187,
            column: 13
          }
        },
        loc: {
          start: {
            line: 187,
            column: 17
          },
          end: {
            line: 202,
            column: 1
          }
        },
        line: 187
      },
      "9": {
        name: "tagOpen",
        decl: {
          start: {
            line: 204,
            column: 9
          },
          end: {
            line: 204,
            column: 16
          }
        },
        loc: {
          start: {
            line: 204,
            column: 20
          },
          end: {
            line: 216,
            column: 1
          }
        },
        line: 204
      },
      "10": {
        name: "endTagOpen",
        decl: {
          start: {
            line: 218,
            column: 9
          },
          end: {
            line: 218,
            column: 19
          }
        },
        loc: {
          start: {
            line: 218,
            column: 23
          },
          end: {
            line: 232,
            column: 1
          }
        },
        line: 218
      },
      "11": {
        name: "tagName",
        decl: {
          start: {
            line: 234,
            column: 9
          },
          end: {
            line: 234,
            column: 16
          }
        },
        loc: {
          start: {
            line: 234,
            column: 20
          },
          end: {
            line: 248,
            column: 1
          }
        },
        line: 234
      },
      "12": {
        name: "beforeAttributeName",
        decl: {
          start: {
            line: 250,
            column: 9
          },
          end: {
            line: 250,
            column: 28
          }
        },
        loc: {
          start: {
            line: 250,
            column: 32
          },
          end: {
            line: 264,
            column: 1
          }
        },
        line: 250
      },
      "13": {
        name: "attributeName",
        decl: {
          start: {
            line: 266,
            column: 9
          },
          end: {
            line: 266,
            column: 22
          }
        },
        loc: {
          start: {
            line: 266,
            column: 26
          },
          end: {
            line: 279,
            column: 1
          }
        },
        line: 266
      },
      "14": {
        name: "beforeAttributeValue",
        decl: {
          start: {
            line: 281,
            column: 9
          },
          end: {
            line: 281,
            column: 29
          }
        },
        loc: {
          start: {
            line: 281,
            column: 33
          },
          end: {
            line: 293,
            column: 1
          }
        },
        line: 281
      },
      "15": {
        name: "doubleQuotedAttributeValue",
        decl: {
          start: {
            line: 296,
            column: 9
          },
          end: {
            line: 296,
            column: 35
          }
        },
        loc: {
          start: {
            line: 296,
            column: 39
          },
          end: {
            line: 308,
            column: 1
          }
        },
        line: 296
      },
      "16": {
        name: "singleQuotedAttributeValue",
        decl: {
          start: {
            line: 310,
            column: 9
          },
          end: {
            line: 310,
            column: 35
          }
        },
        loc: {
          start: {
            line: 310,
            column: 39
          },
          end: {
            line: 322,
            column: 1
          }
        },
        line: 310
      },
      "17": {
        name: "afterQuotedAttributeValue",
        decl: {
          start: {
            line: 324,
            column: 9
          },
          end: {
            line: 324,
            column: 34
          }
        },
        loc: {
          start: {
            line: 324,
            column: 38
          },
          end: {
            line: 339,
            column: 1
          }
        },
        line: 324
      },
      "18": {
        name: "UnquotedAttributeValue",
        decl: {
          start: {
            line: 341,
            column: 9
          },
          end: {
            line: 341,
            column: 31
          }
        },
        loc: {
          start: {
            line: 341,
            column: 35
          },
          end: {
            line: 362,
            column: 1
          }
        },
        line: 341
      },
      "19": {
        name: "selfClosingStartTag",
        decl: {
          start: {
            line: 366,
            column: 9
          },
          end: {
            line: 366,
            column: 28
          }
        },
        loc: {
          start: {
            line: 366,
            column: 32
          },
          end: {
            line: 376,
            column: 1
          }
        },
        line: 366
      },
      "20": {
        name: "afterAttributeName",
        decl: {
          start: {
            line: 378,
            column: 9
          },
          end: {
            line: 378,
            column: 27
          }
        },
        loc: {
          start: {
            line: 378,
            column: 31
          },
          end: {
            line: 399,
            column: 1
          }
        },
        line: 378
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 401,
            column: 25
          },
          end: {
            line: 401,
            column: 26
          }
        },
        loc: {
          start: {
            line: 401,
            column: 35
          },
          end: {
            line: 408,
            column: 1
          }
        },
        line: 401
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 23,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 23,
            column: 17
          }
        }, {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 23,
            column: 40
          }
        }],
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }],
        line: 27
      },
      "3": {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }, {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }],
        line: 29
      },
      "4": {
        loc: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 16
          }
        }, {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 60
          }
        }],
        line: 29
      },
      "5": {
        loc: {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 41,
            column: 5
          }
        }, {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 41,
            column: 5
          }
        }],
        line: 32
      },
      "6": {
        loc: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }, {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        }],
        line: 34
      },
      "7": {
        loc: {
          start: {
            line: 34,
            column: 12
          },
          end: {
            line: 34,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 12
          },
          end: {
            line: 34,
            column: 16
          }
        }, {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 34,
            column: 60
          }
        }],
        line: 34
      },
      "8": {
        loc: {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 40,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 40,
            column: 9
          }
        }, {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 40,
            column: 9
          }
        }],
        line: 38
      },
      "9": {
        loc: {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        }, {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        }],
        line: 49
      },
      "10": {
        loc: {
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 55,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 55,
            column: 9
          }
        }, {
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 55,
            column: 9
          }
        }],
        line: 51
      },
      "11": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        }, {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        }],
        line: 61
      },
      "12": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }, {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        }],
        line: 64
      },
      "13": {
        loc: {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        }, {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        }],
        line: 67
      },
      "14": {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        }, {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        }],
        line: 78
      },
      "15": {
        loc: {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        }, {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 89,
            column: 9
          }
        }],
        line: 87
      },
      "16": {
        loc: {
          start: {
            line: 96,
            column: 12
          },
          end: {
            line: 98,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 12
          },
          end: {
            line: 98,
            column: 13
          }
        }, {
          start: {
            line: 96,
            column: 12
          },
          end: {
            line: 98,
            column: 13
          }
        }],
        line: 96
      },
      "17": {
        loc: {
          start: {
            line: 101,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        }, {
          start: {
            line: 101,
            column: 8
          },
          end: {
            line: 103,
            column: 9
          }
        }],
        line: 101
      },
      "18": {
        loc: {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 123,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 123,
            column: 9
          }
        }, {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 123,
            column: 9
          }
        }],
        line: 105
      },
      "19": {
        loc: {
          start: {
            line: 111,
            column: 16
          },
          end: {
            line: 113,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 111,
            column: 16
          },
          end: {
            line: 113,
            column: 17
          }
        }, {
          start: {
            line: 111,
            column: 16
          },
          end: {
            line: 113,
            column: 17
          }
        }],
        line: 111
      },
      "20": {
        loc: {
          start: {
            line: 114,
            column: 16
          },
          end: {
            line: 120,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 16
          },
          end: {
            line: 120,
            column: 17
          }
        }, {
          start: {
            line: 114,
            column: 16
          },
          end: {
            line: 120,
            column: 17
          }
        }],
        line: 114
      },
      "21": {
        loc: {
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 120,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 120,
            column: 17
          }
        }, {
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 120,
            column: 17
          }
        }],
        line: 117
      },
      "22": {
        loc: {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        }, {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        }],
        line: 134
      },
      "23": {
        loc: {
          start: {
            line: 144,
            column: 12
          },
          end: {
            line: 149,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 12
          },
          end: {
            line: 149,
            column: 13
          }
        }, {
          start: {
            line: 144,
            column: 12
          },
          end: {
            line: 149,
            column: 13
          }
        }],
        line: 144
      },
      "24": {
        loc: {
          start: {
            line: 144,
            column: 16
          },
          end: {
            line: 144,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 144,
            column: 16
          },
          end: {
            line: 144,
            column: 27
          }
        }, {
          start: {
            line: 144,
            column: 31
          },
          end: {
            line: 144,
            column: 45
          }
        }],
        line: 144
      },
      "25": {
        loc: {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 159,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 159,
            column: 9
          }
        }, {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 159,
            column: 9
          }
        }],
        line: 157
      },
      "26": {
        loc: {
          start: {
            line: 163,
            column: 11
          },
          end: {
            line: 184,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 163,
            column: 11
          },
          end: {
            line: 184,
            column: 5
          }
        }, {
          start: {
            line: 163,
            column: 11
          },
          end: {
            line: 184,
            column: 5
          }
        }],
        line: 163
      },
      "27": {
        loc: {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 173,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 173,
            column: 9
          }
        }, {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 173,
            column: 9
          }
        }],
        line: 164
      },
      "28": {
        loc: {
          start: {
            line: 168,
            column: 12
          },
          end: {
            line: 170,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 168,
            column: 12
          },
          end: {
            line: 170,
            column: 13
          }
        }, {
          start: {
            line: 168,
            column: 12
          },
          end: {
            line: 170,
            column: 13
          }
        }],
        line: 168
      },
      "29": {
        loc: {
          start: {
            line: 175,
            column: 11
          },
          end: {
            line: 184,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 175,
            column: 11
          },
          end: {
            line: 184,
            column: 5
          }
        }, {
          start: {
            line: 175,
            column: 11
          },
          end: {
            line: 184,
            column: 5
          }
        }],
        line: 175
      },
      "30": {
        loc: {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        }, {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        }],
        line: 176
      },
      "31": {
        loc: {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        }, {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        }],
        line: 188
      },
      "32": {
        loc: {
          start: {
            line: 190,
            column: 11
          },
          end: {
            line: 201,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 11
          },
          end: {
            line: 201,
            column: 5
          }
        }, {
          start: {
            line: 190,
            column: 11
          },
          end: {
            line: 201,
            column: 5
          }
        }],
        line: 190
      },
      "33": {
        loc: {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        }, {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 215,
            column: 5
          }
        }],
        line: 205
      },
      "34": {
        loc: {
          start: {
            line: 207,
            column: 11
          },
          end: {
            line: 215,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 207,
            column: 11
          },
          end: {
            line: 215,
            column: 5
          }
        }, {
          start: {
            line: 207,
            column: 11
          },
          end: {
            line: 215,
            column: 5
          }
        }],
        line: 207
      },
      "35": {
        loc: {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 219
      },
      "36": {
        loc: {
          start: {
            line: 225,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 225,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 225,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 225
      },
      "37": {
        loc: {
          start: {
            line: 227,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 227,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 227
      },
      "38": {
        loc: {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        }, {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        }],
        line: 235
      },
      "39": {
        loc: {
          start: {
            line: 237,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 237,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        }, {
          start: {
            line: 237,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        }],
        line: 237
      },
      "40": {
        loc: {
          start: {
            line: 239,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        }, {
          start: {
            line: 239,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        }],
        line: 239
      },
      "41": {
        loc: {
          start: {
            line: 242,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 242,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        }, {
          start: {
            line: 242,
            column: 11
          },
          end: {
            line: 247,
            column: 5
          }
        }],
        line: 242
      },
      "42": {
        loc: {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        }, {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        }],
        line: 251
      },
      "43": {
        loc: {
          start: {
            line: 253,
            column: 11
          },
          end: {
            line: 263,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 253,
            column: 11
          },
          end: {
            line: 263,
            column: 5
          }
        }, {
          start: {
            line: 253,
            column: 11
          },
          end: {
            line: 263,
            column: 5
          }
        }],
        line: 253
      },
      "44": {
        loc: {
          start: {
            line: 253,
            column: 15
          },
          end: {
            line: 253,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 253,
            column: 15
          },
          end: {
            line: 253,
            column: 24
          }
        }, {
          start: {
            line: 253,
            column: 28
          },
          end: {
            line: 253,
            column: 37
          }
        }, {
          start: {
            line: 253,
            column: 41
          },
          end: {
            line: 253,
            column: 50
          }
        }],
        line: 253
      },
      "45": {
        loc: {
          start: {
            line: 255,
            column: 11
          },
          end: {
            line: 263,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 255,
            column: 11
          },
          end: {
            line: 263,
            column: 5
          }
        }, {
          start: {
            line: 255,
            column: 11
          },
          end: {
            line: 263,
            column: 5
          }
        }],
        line: 255
      },
      "46": {
        loc: {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 278,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 278,
            column: 5
          }
        }, {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 278,
            column: 5
          }
        }],
        line: 267
      },
      "47": {
        loc: {
          start: {
            line: 267,
            column: 8
          },
          end: {
            line: 267,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 267,
            column: 8
          },
          end: {
            line: 267,
            column: 30
          }
        }, {
          start: {
            line: 267,
            column: 34
          },
          end: {
            line: 267,
            column: 43
          }
        }, {
          start: {
            line: 267,
            column: 47
          },
          end: {
            line: 267,
            column: 56
          }
        }, {
          start: {
            line: 267,
            column: 60
          },
          end: {
            line: 267,
            column: 69
          }
        }],
        line: 267
      },
      "48": {
        loc: {
          start: {
            line: 269,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 269,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        }, {
          start: {
            line: 269,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        }],
        line: 269
      },
      "49": {
        loc: {
          start: {
            line: 271,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 271,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        }, {
          start: {
            line: 271,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        }],
        line: 271
      },
      "50": {
        loc: {
          start: {
            line: 273,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 273,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        }, {
          start: {
            line: 273,
            column: 11
          },
          end: {
            line: 278,
            column: 5
          }
        }],
        line: 273
      },
      "51": {
        loc: {
          start: {
            line: 273,
            column: 15
          },
          end: {
            line: 273,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 273,
            column: 15
          },
          end: {
            line: 273,
            column: 25
          }
        }, {
          start: {
            line: 273,
            column: 29
          },
          end: {
            line: 273,
            column: 38
          }
        }, {
          start: {
            line: 273,
            column: 42
          },
          end: {
            line: 273,
            column: 51
          }
        }],
        line: 273
      },
      "52": {
        loc: {
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        }, {
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 292,
            column: 5
          }
        }],
        line: 282
      },
      "53": {
        loc: {
          start: {
            line: 282,
            column: 8
          },
          end: {
            line: 282,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 282,
            column: 8
          },
          end: {
            line: 282,
            column: 30
          }
        }, {
          start: {
            line: 282,
            column: 34
          },
          end: {
            line: 282,
            column: 43
          }
        }, {
          start: {
            line: 282,
            column: 47
          },
          end: {
            line: 282,
            column: 56
          }
        }, {
          start: {
            line: 282,
            column: 60
          },
          end: {
            line: 282,
            column: 69
          }
        }],
        line: 282
      },
      "54": {
        loc: {
          start: {
            line: 284,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 284,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        }, {
          start: {
            line: 284,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        }],
        line: 284
      },
      "55": {
        loc: {
          start: {
            line: 286,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 286,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        }, {
          start: {
            line: 286,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        }],
        line: 286
      },
      "56": {
        loc: {
          start: {
            line: 288,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 288,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        }, {
          start: {
            line: 288,
            column: 11
          },
          end: {
            line: 292,
            column: 5
          }
        }],
        line: 288
      },
      "57": {
        loc: {
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 307,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 307,
            column: 5
          }
        }, {
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 307,
            column: 5
          }
        }],
        line: 297
      },
      "58": {
        loc: {
          start: {
            line: 300,
            column: 11
          },
          end: {
            line: 307,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 300,
            column: 11
          },
          end: {
            line: 307,
            column: 5
          }
        }, {
          start: {
            line: 300,
            column: 11
          },
          end: {
            line: 307,
            column: 5
          }
        }],
        line: 300
      },
      "59": {
        loc: {
          start: {
            line: 302,
            column: 11
          },
          end: {
            line: 307,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 302,
            column: 11
          },
          end: {
            line: 307,
            column: 5
          }
        }, {
          start: {
            line: 302,
            column: 11
          },
          end: {
            line: 307,
            column: 5
          }
        }],
        line: 302
      },
      "60": {
        loc: {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 321,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 321,
            column: 5
          }
        }, {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 321,
            column: 5
          }
        }],
        line: 311
      },
      "61": {
        loc: {
          start: {
            line: 314,
            column: 11
          },
          end: {
            line: 321,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 314,
            column: 11
          },
          end: {
            line: 321,
            column: 5
          }
        }, {
          start: {
            line: 314,
            column: 11
          },
          end: {
            line: 321,
            column: 5
          }
        }],
        line: 314
      },
      "62": {
        loc: {
          start: {
            line: 316,
            column: 11
          },
          end: {
            line: 321,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 316,
            column: 11
          },
          end: {
            line: 321,
            column: 5
          }
        }, {
          start: {
            line: 316,
            column: 11
          },
          end: {
            line: 321,
            column: 5
          }
        }],
        line: 316
      },
      "63": {
        loc: {
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 338,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 338,
            column: 5
          }
        }, {
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 338,
            column: 5
          }
        }],
        line: 325
      },
      "64": {
        loc: {
          start: {
            line: 327,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 327,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        }, {
          start: {
            line: 327,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        }],
        line: 327
      },
      "65": {
        loc: {
          start: {
            line: 329,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 329,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        }, {
          start: {
            line: 329,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        }],
        line: 329
      },
      "66": {
        loc: {
          start: {
            line: 333,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 333,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        }, {
          start: {
            line: 333,
            column: 11
          },
          end: {
            line: 338,
            column: 5
          }
        }],
        line: 333
      },
      "67": {
        loc: {
          start: {
            line: 342,
            column: 4
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 342,
            column: 4
          },
          end: {
            line: 361,
            column: 5
          }
        }, {
          start: {
            line: 342,
            column: 4
          },
          end: {
            line: 361,
            column: 5
          }
        }],
        line: 342
      },
      "68": {
        loc: {
          start: {
            line: 345,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 345,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }, {
          start: {
            line: 345,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }],
        line: 345
      },
      "69": {
        loc: {
          start: {
            line: 348,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 348,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }, {
          start: {
            line: 348,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }],
        line: 348
      },
      "70": {
        loc: {
          start: {
            line: 352,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 352,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }, {
          start: {
            line: 352,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }],
        line: 352
      },
      "71": {
        loc: {
          start: {
            line: 354,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 354,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }, {
          start: {
            line: 354,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }],
        line: 354
      },
      "72": {
        loc: {
          start: {
            line: 354,
            column: 15
          },
          end: {
            line: 354,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 354,
            column: 15
          },
          end: {
            line: 354,
            column: 25
          }
        }, {
          start: {
            line: 354,
            column: 29
          },
          end: {
            line: 354,
            column: 38
          }
        }, {
          start: {
            line: 354,
            column: 42
          },
          end: {
            line: 354,
            column: 51
          }
        }, {
          start: {
            line: 354,
            column: 55
          },
          end: {
            line: 354,
            column: 64
          }
        }],
        line: 354
      },
      "73": {
        loc: {
          start: {
            line: 356,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 356,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }, {
          start: {
            line: 356,
            column: 11
          },
          end: {
            line: 361,
            column: 5
          }
        }],
        line: 356
      },
      "74": {
        loc: {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 375,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 375,
            column: 5
          }
        }, {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 375,
            column: 5
          }
        }],
        line: 367
      },
      "75": {
        loc: {
          start: {
            line: 371,
            column: 11
          },
          end: {
            line: 375,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 371,
            column: 11
          },
          end: {
            line: 375,
            column: 5
          }
        }, {
          start: {
            line: 371,
            column: 11
          },
          end: {
            line: 375,
            column: 5
          }
        }],
        line: 371
      },
      "76": {
        loc: {
          start: {
            line: 379,
            column: 4
          },
          end: {
            line: 398,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 379,
            column: 4
          },
          end: {
            line: 398,
            column: 5
          }
        }, {
          start: {
            line: 379,
            column: 4
          },
          end: {
            line: 398,
            column: 5
          }
        }],
        line: 379
      },
      "77": {
        loc: {
          start: {
            line: 381,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 381,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }, {
          start: {
            line: 381,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }],
        line: 381
      },
      "78": {
        loc: {
          start: {
            line: 383,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 383,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }, {
          start: {
            line: 383,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }],
        line: 383
      },
      "79": {
        loc: {
          start: {
            line: 385,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 385,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }, {
          start: {
            line: 385,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }],
        line: 385
      },
      "80": {
        loc: {
          start: {
            line: 389,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 389,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }, {
          start: {
            line: 389,
            column: 11
          },
          end: {
            line: 398,
            column: 5
          }
        }],
        line: 389
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0, 0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0, 0],
      "52": [0, 0],
      "53": [0, 0, 0, 0],
      "54": [0, 0],
      "55": [0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0, 0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0, 0],
      "76": [0, 0],
      "77": [0, 0],
      "78": [0, 0],
      "79": [0, 0],
      "80": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "50cde81da7f23d3c03987d2bbe2c7d354f670aaf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8o9uht0n8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8o9uht0n8();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var css = (cov_8o9uht0n8().s[0]++, require('css'));
var EOF = (cov_8o9uht0n8().s[1]++, Symbol('EOF')); // end of a file signal

var layout = (cov_8o9uht0n8().s[2]++, require('./layout.js'));
var currentToken = (cov_8o9uht0n8().s[3]++, null);
var currentAttribute = (cov_8o9uht0n8().s[4]++, null);
var currentTextNode = (cov_8o9uht0n8().s[5]++, null);
var stack = (cov_8o9uht0n8().s[6]++, [{
  type: 'document',
  children: []
}]); // 暂存css rule

var rules = (cov_8o9uht0n8().s[7]++, []);

function addCSSRules(text) {
  cov_8o9uht0n8().f[0]++;
  var ast = (cov_8o9uht0n8().s[8]++, css.parse(text));
  cov_8o9uht0n8().s[9]++;
  console.log(JSON.stringify(ast, null, "    "));
  cov_8o9uht0n8().s[10]++;
  rules.push.apply(rules, _toConsumableArray(ast.stylesheet.rules));
} // 当前只支持， 并且不支持连着写： div.myClass#id  这种是不支持的.
// .class 
//  #id
// div


function match(element, selector) {
  cov_8o9uht0n8().f[1]++;
  cov_8o9uht0n8().s[11]++;

  if ((cov_8o9uht0n8().b[1][0]++, !selector) || (cov_8o9uht0n8().b[1][1]++, !element.attributes)) {
    cov_8o9uht0n8().b[0][0]++;
    cov_8o9uht0n8().s[12]++;
    return false;
  } else {
    cov_8o9uht0n8().b[0][1]++;
  }

  cov_8o9uht0n8().s[13]++;

  if (selector.charAt(0) === '#') {
    cov_8o9uht0n8().b[2][0]++;
    var attr = (cov_8o9uht0n8().s[14]++, element.attributes.filter(function (attr) {
      cov_8o9uht0n8().f[2]++;
      cov_8o9uht0n8().s[15]++;
      return attr.name === 'id';
    })[0]);
    cov_8o9uht0n8().s[16]++;

    if ((cov_8o9uht0n8().b[4][0]++, attr) && (cov_8o9uht0n8().b[4][1]++, attr.value === selector.replace('#', ''))) {
      cov_8o9uht0n8().b[3][0]++;
      cov_8o9uht0n8().s[17]++;
      return true;
    } else {
      cov_8o9uht0n8().b[3][1]++;
    }
  } else {
    cov_8o9uht0n8().b[2][1]++;
    cov_8o9uht0n8().s[18]++;

    if (selector.charAt(0) === '.') {
      cov_8o9uht0n8().b[5][0]++;
      var attr = (cov_8o9uht0n8().s[19]++, element.attributes.filter(function (attr) {
        cov_8o9uht0n8().f[3]++;
        cov_8o9uht0n8().s[20]++;
        return attr.name === 'class';
      })[0]);
      cov_8o9uht0n8().s[21]++;

      if ((cov_8o9uht0n8().b[7][0]++, attr) && (cov_8o9uht0n8().b[7][1]++, attr.value === selector.replace('.', ''))) {
        cov_8o9uht0n8().b[6][0]++;
        cov_8o9uht0n8().s[22]++;
        return true;
      } else {
        cov_8o9uht0n8().b[6][1]++;
      }
    } else {
      cov_8o9uht0n8().b[5][1]++;
      cov_8o9uht0n8().s[23]++;

      if (element.tagName === selector) {
        cov_8o9uht0n8().b[8][0]++;
        cov_8o9uht0n8().s[24]++;
        return true;
      } else {
        cov_8o9uht0n8().b[8][1]++;
      }
    }
  }

  cov_8o9uht0n8().s[25]++;
  return false;
}

function specificity(selector) {
  cov_8o9uht0n8().f[4]++;
  var p = (cov_8o9uht0n8().s[26]++, [0, 0, 0, 0]);
  var selectorParts = (cov_8o9uht0n8().s[27]++, selector.split(" "));
  cov_8o9uht0n8().s[28]++;

  var _iterator = _createForOfIteratorHelper(selectorParts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;
      cov_8o9uht0n8().s[29]++;

      if (part.charAt(0) === '#') {
        cov_8o9uht0n8().b[9][0]++;
        cov_8o9uht0n8().s[30]++;
        p[1] += 1;
      } else {
        cov_8o9uht0n8().b[9][1]++;
        cov_8o9uht0n8().s[31]++;

        if (part.charAt(0) === '.') {
          cov_8o9uht0n8().b[10][0]++;
          cov_8o9uht0n8().s[32]++;
          p[2] += 1;
        } else {
          cov_8o9uht0n8().b[10][1]++;
          cov_8o9uht0n8().s[33]++;
          p[3] += 1;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  cov_8o9uht0n8().s[34]++;
  return p;
}

function compare(sp1, sp2) {
  cov_8o9uht0n8().f[5]++;
  cov_8o9uht0n8().s[35]++;

  if (sp1[0] - sp2[0]) {
    cov_8o9uht0n8().b[11][0]++;
    cov_8o9uht0n8().s[36]++;
    return sp1[0] - sp2[0];
  } else {
    cov_8o9uht0n8().b[11][1]++;
  }

  cov_8o9uht0n8().s[37]++;

  if (sp1[1] - sp2[1]) {
    cov_8o9uht0n8().b[12][0]++;
    cov_8o9uht0n8().s[38]++;
    return sp1[1] - sp2[1];
  } else {
    cov_8o9uht0n8().b[12][1]++;
  }

  cov_8o9uht0n8().s[39]++;

  if (sp1[2] - sp2[2]) {
    cov_8o9uht0n8().b[13][0]++;
    cov_8o9uht0n8().s[40]++;
    return sp1[2] - sp2[2];
  } else {
    cov_8o9uht0n8().b[13][1]++;
  }

  cov_8o9uht0n8().s[41]++;
  return sp1[3] - sp2[3];
}

function computeCSS(element) {
  cov_8o9uht0n8().f[6]++;
  cov_8o9uht0n8().s[42]++;
  console.log(rules);
  cov_8o9uht0n8().s[43]++;
  console.log("compute css for element ", element);
  var elements = (cov_8o9uht0n8().s[44]++, stack.slice().reverse());
  cov_8o9uht0n8().s[45]++;

  if (!element.computedStyle) {
    cov_8o9uht0n8().b[14][0]++;
    cov_8o9uht0n8().s[46]++;
    element.computedStyle = {};
  } else {
    cov_8o9uht0n8().b[14][1]++;
  } // 选择器/父级元素执行双循环
  // j: selectors index
  // i: elements index


  cov_8o9uht0n8().s[47]++;

  var _iterator2 = _createForOfIteratorHelper(rules),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var rule = _step2.value;
      var selectorParts = (cov_8o9uht0n8().s[48]++, rule.selectors[0].split(' ').reverse());
      cov_8o9uht0n8().s[49]++;

      if (!match(element, selectorParts[0])) {
        cov_8o9uht0n8().b[15][0]++;
        cov_8o9uht0n8().s[50]++;
        continue;
      } else {
        cov_8o9uht0n8().b[15][1]++;
      }

      var matched = (cov_8o9uht0n8().s[51]++, false);
      var j = (cov_8o9uht0n8().s[52]++, 1);
      cov_8o9uht0n8().s[53]++;

      for (var i = (cov_8o9uht0n8().s[54]++, 0); i < elements.length; i++) {
        cov_8o9uht0n8().s[55]++;

        if (match(elements[i], selectorParts[j])) {
          cov_8o9uht0n8().b[16][0]++;
          cov_8o9uht0n8().s[56]++;
          j++;
        } else {
          cov_8o9uht0n8().b[16][1]++;
        }
      }

      cov_8o9uht0n8().s[57]++;

      if (j >= selectorParts.length) {
        cov_8o9uht0n8().b[17][0]++;
        cov_8o9uht0n8().s[58]++;
        matched = true;
      } else {
        cov_8o9uht0n8().b[17][1]++;
      }

      cov_8o9uht0n8().s[59]++;

      if (matched) {
        cov_8o9uht0n8().b[18][0]++;
        cov_8o9uht0n8().s[60]++;
        // 如果匹配， 则把对应的css属性加入对应dom节点
        console.log("Element", element, "matched rule", rule);
        var sp = (cov_8o9uht0n8().s[61]++, specificity(rule.selectors[0]));
        var computedStyle = (cov_8o9uht0n8().s[62]++, element.computedStyle);
        cov_8o9uht0n8().s[63]++;

        var _iterator3 = _createForOfIteratorHelper(rule.declarations),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var declaration = _step3.value;
            cov_8o9uht0n8().s[64]++;

            if (!computedStyle[declaration.property]) {
              cov_8o9uht0n8().b[19][0]++;
              cov_8o9uht0n8().s[65]++;
              computedStyle[declaration.property] = {};
            } else {
              cov_8o9uht0n8().b[19][1]++;
            }

            cov_8o9uht0n8().s[66]++;

            if (!computedStyle[declaration.property].specificity) {
              cov_8o9uht0n8().b[20][0]++;
              cov_8o9uht0n8().s[67]++;
              computedStyle[declaration.property].value = declaration.value;
              cov_8o9uht0n8().s[68]++;
              computedStyle[declaration.property].specificity = sp;
            } else {
              cov_8o9uht0n8().b[20][1]++;
              cov_8o9uht0n8().s[69]++;

              if (compare(computedStyle[declaration.property].specificity, sp) < 0) {
                cov_8o9uht0n8().b[21][0]++;
                cov_8o9uht0n8().s[70]++;
                computedStyle[declaration.property].value = declaration.value;
                cov_8o9uht0n8().s[71]++;
                computedStyle[declaration.property].specificity = sp;
              } else {
                cov_8o9uht0n8().b[21][1]++;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        cov_8o9uht0n8().b[18][1]++;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function emit(token) {
  cov_8o9uht0n8().f[7]++;
  cov_8o9uht0n8().s[72]++;
  console.log(token);
  var top = (cov_8o9uht0n8().s[73]++, stack[stack.length - 1]);
  cov_8o9uht0n8().s[74]++;

  if (token.type === 'startTag') {
    cov_8o9uht0n8().b[22][0]++;
    var element = (cov_8o9uht0n8().s[75]++, {
      type: 'element',
      children: [],
      attributes: []
    });
    cov_8o9uht0n8().s[76]++;
    element.tagName = token.tagName;
    cov_8o9uht0n8().s[77]++;

    for (var p in token) {
      cov_8o9uht0n8().s[78]++;

      if ((cov_8o9uht0n8().b[24][0]++, p != "type") && (cov_8o9uht0n8().b[24][1]++, p != "tagName")) {
        cov_8o9uht0n8().b[23][0]++;
        cov_8o9uht0n8().s[79]++;
        element.attributes.push({
          name: p,
          value: token[p]
        });
      } else {
        cov_8o9uht0n8().b[23][1]++;
      }
    }

    cov_8o9uht0n8().s[80]++;
    computeCSS(element);
    cov_8o9uht0n8().s[81]++;
    top.children.push(element);
    cov_8o9uht0n8().s[82]++;
    element.parent = top;
    cov_8o9uht0n8().s[83]++;

    if (!token.isSelfClosing) {
      cov_8o9uht0n8().b[25][0]++;
      cov_8o9uht0n8().s[84]++;
      stack.push(element);
    } else {
      cov_8o9uht0n8().b[25][1]++;
    }

    cov_8o9uht0n8().s[85]++;
    currentTextNode = null;
  } else {
    cov_8o9uht0n8().b[22][1]++;
    cov_8o9uht0n8().s[86]++;

    if (token.type === 'endTag') {
      cov_8o9uht0n8().b[26][0]++;
      cov_8o9uht0n8().s[87]++;

      if (top.tagName !== token.tagName) {
        cov_8o9uht0n8().b[27][0]++;
        cov_8o9uht0n8().s[88]++;
        throw new Error("Tag start end don't match!");
      } else {
        cov_8o9uht0n8().b[27][1]++;
        cov_8o9uht0n8().s[89]++;

        // 遇到css标签， 执行添加css规则操作
        if (top.tagName === 'style') {
          cov_8o9uht0n8().b[28][0]++;
          cov_8o9uht0n8().s[90]++;
          addCSSRules(top.children[0].content);
        } else {
          cov_8o9uht0n8().b[28][1]++;
        }

        cov_8o9uht0n8().s[91]++;
        layout(top);
        cov_8o9uht0n8().s[92]++;
        stack.pop();
      }

      cov_8o9uht0n8().s[93]++;
      currentTextNode = null;
    } else {
      cov_8o9uht0n8().b[26][1]++;
      cov_8o9uht0n8().s[94]++;

      if (token.type === 'text') {
        cov_8o9uht0n8().b[29][0]++;
        cov_8o9uht0n8().s[95]++;

        if (currentTextNode === null) {
          cov_8o9uht0n8().b[30][0]++;
          cov_8o9uht0n8().s[96]++;
          currentTextNode = {
            type: 'text',
            content: ''
          };
          cov_8o9uht0n8().s[97]++;
          top.children.push(currentTextNode);
        } else {
          cov_8o9uht0n8().b[30][1]++;
        }

        cov_8o9uht0n8().s[98]++;
        currentTextNode.content += token.content;
      } else {
        cov_8o9uht0n8().b[29][1]++;
      }
    }
  }
}

function data(c) {
  cov_8o9uht0n8().f[8]++;
  cov_8o9uht0n8().s[99]++;

  if (c === '<') {
    cov_8o9uht0n8().b[31][0]++;
    cov_8o9uht0n8().s[100]++;
    return tagOpen;
  } else {
    cov_8o9uht0n8().b[31][1]++;
    cov_8o9uht0n8().s[101]++;

    if (c === EOF) {
      cov_8o9uht0n8().b[32][0]++;
      cov_8o9uht0n8().s[102]++;
      emit({
        type: 'EOF'
      });
      cov_8o9uht0n8().s[103]++;
      return;
    } else {
      cov_8o9uht0n8().b[32][1]++;
      cov_8o9uht0n8().s[104]++;
      emit({
        type: 'text',
        content: c
      });
      cov_8o9uht0n8().s[105]++;
      return data;
    }
  }
}

function tagOpen(c) {
  cov_8o9uht0n8().f[9]++;
  cov_8o9uht0n8().s[106]++;

  if (c === '/') {
    cov_8o9uht0n8().b[33][0]++;
    cov_8o9uht0n8().s[107]++;
    return endTagOpen;
  } else {
    cov_8o9uht0n8().b[33][1]++;
    cov_8o9uht0n8().s[108]++;

    if (c.match(/^[a-zA-Z]$/)) {
      cov_8o9uht0n8().b[34][0]++;
      cov_8o9uht0n8().s[109]++;
      currentToken = {
        type: 'startTag',
        tagName: ''
      };
      cov_8o9uht0n8().s[110]++;
      return tagName(c);
    } else {
      cov_8o9uht0n8().b[34][1]++;
      cov_8o9uht0n8().s[111]++;
      return;
    }
  }
}

function endTagOpen(c) {
  cov_8o9uht0n8().f[10]++;
  cov_8o9uht0n8().s[112]++;

  if (c.match(/^[a-zA-Z]$/)) {
    cov_8o9uht0n8().b[35][0]++;
    cov_8o9uht0n8().s[113]++;
    currentToken = {
      type: 'endTag',
      tagName: ''
    };
    cov_8o9uht0n8().s[114]++;
    return tagName(c);
  } else {
    cov_8o9uht0n8().b[35][1]++;
    cov_8o9uht0n8().s[115]++;

    if (c === '>') {
      cov_8o9uht0n8().b[36][0]++;
    } else {
      cov_8o9uht0n8().b[36][1]++;
      cov_8o9uht0n8().s[116]++;

      if (c === EOF) {
        cov_8o9uht0n8().b[37][0]++;
      } else {
        cov_8o9uht0n8().b[37][1]++;
      }
    }
  }
}

function tagName(c) {
  cov_8o9uht0n8().f[11]++;
  cov_8o9uht0n8().s[117]++;

  if (c.match(/^[\t\n\f ]$/)) {
    cov_8o9uht0n8().b[38][0]++;
    cov_8o9uht0n8().s[118]++;
    return beforeAttributeName;
  } else {
    cov_8o9uht0n8().b[38][1]++;
    cov_8o9uht0n8().s[119]++;

    if (c === '/') {
      cov_8o9uht0n8().b[39][0]++;
      cov_8o9uht0n8().s[120]++;
      return selfClosingStartTag;
    } else {
      cov_8o9uht0n8().b[39][1]++;
      cov_8o9uht0n8().s[121]++;

      if (c.match(/^[a-zA-Z]$/)) {
        cov_8o9uht0n8().b[40][0]++;
        cov_8o9uht0n8().s[122]++;
        currentToken.tagName += c;
        cov_8o9uht0n8().s[123]++;
        return tagName;
      } else {
        cov_8o9uht0n8().b[40][1]++;
        cov_8o9uht0n8().s[124]++;

        if (c === '>') {
          cov_8o9uht0n8().b[41][0]++;
          cov_8o9uht0n8().s[125]++;
          emit(currentToken);
          cov_8o9uht0n8().s[126]++;
          return data;
        } else {
          cov_8o9uht0n8().b[41][1]++;
          cov_8o9uht0n8().s[127]++;
          return tagName;
        }
      }
    }
  }
}

function beforeAttributeName(c) {
  cov_8o9uht0n8().f[12]++;
  cov_8o9uht0n8().s[128]++;

  if (c.match(/^[\t\n\f ]$/)) {
    cov_8o9uht0n8().b[42][0]++;
    cov_8o9uht0n8().s[129]++;
    return beforeAttributeName;
  } else {
    cov_8o9uht0n8().b[42][1]++;
    cov_8o9uht0n8().s[130]++;

    if ((cov_8o9uht0n8().b[44][0]++, c === '/') || (cov_8o9uht0n8().b[44][1]++, c === '>') || (cov_8o9uht0n8().b[44][2]++, c === EOF)) {
      cov_8o9uht0n8().b[43][0]++;
      cov_8o9uht0n8().s[131]++;
      return afterAttributeName(c);
    } else {
      cov_8o9uht0n8().b[43][1]++;
      cov_8o9uht0n8().s[132]++;

      if (c === '=') {
        cov_8o9uht0n8().b[45][0]++;
      } else {
        cov_8o9uht0n8().b[45][1]++;
        cov_8o9uht0n8().s[133]++;
        currentAttribute = {
          name: '',
          value: ''
        };
        cov_8o9uht0n8().s[134]++;
        return attributeName(c);
      }
    }
  }
}

function attributeName(c) {
  cov_8o9uht0n8().f[13]++;
  cov_8o9uht0n8().s[135]++;

  if ((cov_8o9uht0n8().b[47][0]++, c.match(/^[\t\n\f ]$/)) || (cov_8o9uht0n8().b[47][1]++, c === '/') || (cov_8o9uht0n8().b[47][2]++, c === '>') || (cov_8o9uht0n8().b[47][3]++, c === EOF)) {
    cov_8o9uht0n8().b[46][0]++;
    cov_8o9uht0n8().s[136]++;
    return afterAttributeName(c);
  } else {
    cov_8o9uht0n8().b[46][1]++;
    cov_8o9uht0n8().s[137]++;

    if (c === '=') {
      cov_8o9uht0n8().b[48][0]++;
      cov_8o9uht0n8().s[138]++;
      return beforeAttributeValue;
    } else {
      cov_8o9uht0n8().b[48][1]++;
      cov_8o9uht0n8().s[139]++;

      if (c === "\0") {
        cov_8o9uht0n8().b[49][0]++;
      } else {
        cov_8o9uht0n8().b[49][1]++;
        cov_8o9uht0n8().s[140]++;

        if ((cov_8o9uht0n8().b[51][0]++, c === '\"') || (cov_8o9uht0n8().b[51][1]++, c === "'") || (cov_8o9uht0n8().b[51][2]++, c === "<")) {
          cov_8o9uht0n8().b[50][0]++;
        } else {
          cov_8o9uht0n8().b[50][1]++;
          cov_8o9uht0n8().s[141]++;
          currentAttribute.name += c;
          cov_8o9uht0n8().s[142]++;
          return attributeName;
        }
      }
    }
  }
}

function beforeAttributeValue(c) {
  cov_8o9uht0n8().f[14]++;
  cov_8o9uht0n8().s[143]++;

  if ((cov_8o9uht0n8().b[53][0]++, c.match(/^[\t\n\f ]$/)) || (cov_8o9uht0n8().b[53][1]++, c === '/') || (cov_8o9uht0n8().b[53][2]++, c === '>') || (cov_8o9uht0n8().b[53][3]++, c === EOF)) {
    cov_8o9uht0n8().b[52][0]++;
    cov_8o9uht0n8().s[144]++;
    return beforeAttributeValue(c);
  } else {
    cov_8o9uht0n8().b[52][1]++;
    cov_8o9uht0n8().s[145]++;

    if (c === '\"') {
      cov_8o9uht0n8().b[54][0]++;
      cov_8o9uht0n8().s[146]++;
      return doubleQuotedAttributeValue;
    } else {
      cov_8o9uht0n8().b[54][1]++;
      cov_8o9uht0n8().s[147]++;

      if (c === "\'") {
        cov_8o9uht0n8().b[55][0]++;
        cov_8o9uht0n8().s[148]++;
        return singleQuotedAttributeValue;
      } else {
        cov_8o9uht0n8().b[55][1]++;
        cov_8o9uht0n8().s[149]++;

        if (c === '>') {
          cov_8o9uht0n8().b[56][0]++;
        } else {
          cov_8o9uht0n8().b[56][1]++;
          cov_8o9uht0n8().s[150]++;
          return UnquotedAttributeValue;
        }
      }
    }
  }
}

function doubleQuotedAttributeValue(c) {
  cov_8o9uht0n8().f[15]++;
  cov_8o9uht0n8().s[151]++;

  if (c === '\"') {
    cov_8o9uht0n8().b[57][0]++;
    cov_8o9uht0n8().s[152]++;
    currentToken[currentAttribute.name] = currentAttribute.value;
    cov_8o9uht0n8().s[153]++;
    return afterQuotedAttributeValue;
  } else {
    cov_8o9uht0n8().b[57][1]++;
    cov_8o9uht0n8().s[154]++;

    if (c === "\0") {
      cov_8o9uht0n8().b[58][0]++;
    } else {
      cov_8o9uht0n8().b[58][1]++;
      cov_8o9uht0n8().s[155]++;

      if (c === EOF) {
        cov_8o9uht0n8().b[59][0]++;
      } else {
        cov_8o9uht0n8().b[59][1]++;
        cov_8o9uht0n8().s[156]++;
        currentAttribute.value += c;
        cov_8o9uht0n8().s[157]++;
        return doubleQuotedAttributeValue;
      }
    }
  }
}

function singleQuotedAttributeValue(c) {
  cov_8o9uht0n8().f[16]++;
  cov_8o9uht0n8().s[158]++;

  if (c === '\"') {
    cov_8o9uht0n8().b[60][0]++;
    cov_8o9uht0n8().s[159]++;
    currentToken[currentAttribute.name] = currentAttribute.value;
    cov_8o9uht0n8().s[160]++;
    return afterQuotedAttributeValue;
  } else {
    cov_8o9uht0n8().b[60][1]++;
    cov_8o9uht0n8().s[161]++;

    if (c === "\0") {
      cov_8o9uht0n8().b[61][0]++;
    } else {
      cov_8o9uht0n8().b[61][1]++;
      cov_8o9uht0n8().s[162]++;

      if (c === EOF) {
        cov_8o9uht0n8().b[62][0]++;
      } else {
        cov_8o9uht0n8().b[62][1]++;
        cov_8o9uht0n8().s[163]++;
        currentAttribute.value += c;
        cov_8o9uht0n8().s[164]++;
        return singleQuotedAttributeValue;
      }
    }
  }
}

function afterQuotedAttributeValue(c) {
  cov_8o9uht0n8().f[17]++;
  cov_8o9uht0n8().s[165]++;

  if (c.match(/^[\t\n\f ]$/)) {
    cov_8o9uht0n8().b[63][0]++;
    cov_8o9uht0n8().s[166]++;
    return beforeAttributeName;
  } else {
    cov_8o9uht0n8().b[63][1]++;
    cov_8o9uht0n8().s[167]++;

    if (c === '/') {
      cov_8o9uht0n8().b[64][0]++;
      cov_8o9uht0n8().s[168]++;
      return selfClosingStartTag;
    } else {
      cov_8o9uht0n8().b[64][1]++;
      cov_8o9uht0n8().s[169]++;

      if (c === '>') {
        cov_8o9uht0n8().b[65][0]++;
        cov_8o9uht0n8().s[170]++;
        currentToken[currentAttribute.name] = currentAttribute.value;
        cov_8o9uht0n8().s[171]++;
        emit(currentToken);
        cov_8o9uht0n8().s[172]++;
        return data;
      } else {
        cov_8o9uht0n8().b[65][1]++;
        cov_8o9uht0n8().s[173]++;

        if (c === EOF) {
          cov_8o9uht0n8().b[66][0]++;
        } else {
          cov_8o9uht0n8().b[66][1]++;
          cov_8o9uht0n8().s[174]++;
          currentAttribute.value += c;
          cov_8o9uht0n8().s[175]++;
          return doubleQuotedAttributeValue;
        }
      }
    }
  }
}

function UnquotedAttributeValue(c) {
  cov_8o9uht0n8().f[18]++;
  cov_8o9uht0n8().s[176]++;

  if (c.match(/^[\t\n\f ]$/)) {
    cov_8o9uht0n8().b[67][0]++;
    cov_8o9uht0n8().s[177]++;
    currentToken[currentAttribute.name] = currentAttribute.value;
    cov_8o9uht0n8().s[178]++;
    return beforeAttributeName;
  } else {
    cov_8o9uht0n8().b[67][1]++;
    cov_8o9uht0n8().s[179]++;

    if (c === '/') {
      cov_8o9uht0n8().b[68][0]++;
      cov_8o9uht0n8().s[180]++;
      currentToken[currentAttribute.name] = currentAttribute.value;
      cov_8o9uht0n8().s[181]++;
      return selfClosingStartTag;
    } else {
      cov_8o9uht0n8().b[68][1]++;
      cov_8o9uht0n8().s[182]++;

      if (c === '>') {
        cov_8o9uht0n8().b[69][0]++;
        cov_8o9uht0n8().s[183]++;
        currentToken[currentAttribute.name] = currentAttribute.value;
        cov_8o9uht0n8().s[184]++;
        emit(currentToken);
        cov_8o9uht0n8().s[185]++;
        return data;
      } else {
        cov_8o9uht0n8().b[69][1]++;
        cov_8o9uht0n8().s[186]++;

        if (c === "\0") {
          cov_8o9uht0n8().b[70][0]++;
        } else {
          cov_8o9uht0n8().b[70][1]++;
          cov_8o9uht0n8().s[187]++;

          if ((cov_8o9uht0n8().b[72][0]++, c === '\"') || (cov_8o9uht0n8().b[72][1]++, c === "'") || (cov_8o9uht0n8().b[72][2]++, c === '<') || (cov_8o9uht0n8().b[72][3]++, c === "`")) {
            cov_8o9uht0n8().b[71][0]++;
          } else {
            cov_8o9uht0n8().b[71][1]++;
            cov_8o9uht0n8().s[188]++;

            if (c === EOF) {
              cov_8o9uht0n8().b[73][0]++;
            } else {
              cov_8o9uht0n8().b[73][1]++;
              cov_8o9uht0n8().s[189]++;
              currentAttribute.value += c;
              cov_8o9uht0n8().s[190]++;
              return UnquotedAttributeValue;
            }
          }
        }
      }
    }
  }
}

function selfClosingStartTag(c) {
  cov_8o9uht0n8().f[19]++;
  cov_8o9uht0n8().s[191]++;

  if (c === '>') {
    cov_8o9uht0n8().b[74][0]++;
    cov_8o9uht0n8().s[192]++;
    currentToken.isSelfClosing = true;
    cov_8o9uht0n8().s[193]++;
    emit(currentToken);
    cov_8o9uht0n8().s[194]++;
    return data;
  } else {
    cov_8o9uht0n8().b[74][1]++;
    cov_8o9uht0n8().s[195]++;

    if (c === 'EOF') {
      cov_8o9uht0n8().b[75][0]++;
    } else {
      cov_8o9uht0n8().b[75][1]++;
    }
  }
}

function afterAttributeName(c) {
  cov_8o9uht0n8().f[20]++;
  cov_8o9uht0n8().s[196]++;

  if (c.match(/^[\t\n\f ]$/)) {
    cov_8o9uht0n8().b[76][0]++;
    cov_8o9uht0n8().s[197]++;
    return afterAttributeName;
  } else {
    cov_8o9uht0n8().b[76][1]++;
    cov_8o9uht0n8().s[198]++;

    if (c === '/') {
      cov_8o9uht0n8().b[77][0]++;
      cov_8o9uht0n8().s[199]++;
      return selfClosingStartTag;
    } else {
      cov_8o9uht0n8().b[77][1]++;
      cov_8o9uht0n8().s[200]++;

      if (c === '=') {
        cov_8o9uht0n8().b[78][0]++;
        cov_8o9uht0n8().s[201]++;
        return beforeAttributeValue;
      } else {
        cov_8o9uht0n8().b[78][1]++;
        cov_8o9uht0n8().s[202]++;

        if (c === '>') {
          cov_8o9uht0n8().b[79][0]++;
          cov_8o9uht0n8().s[203]++;
          currentToken[currentAttribute.name] = currentAttribute.value;
          cov_8o9uht0n8().s[204]++;
          emit(currentToken);
          cov_8o9uht0n8().s[205]++;
          return data;
        } else {
          cov_8o9uht0n8().b[79][1]++;
          cov_8o9uht0n8().s[206]++;

          if (c === EOF) {
            cov_8o9uht0n8().b[80][0]++;
          } else {
            cov_8o9uht0n8().b[80][1]++;
            cov_8o9uht0n8().s[207]++;
            currentToken[currentAttribute.name] = currentAttribute.value;
            cov_8o9uht0n8().s[208]++;
            currentAttribute = {
              name: '',
              value: ''
            };
            cov_8o9uht0n8().s[209]++;
            return attributeName(c);
          }
        }
      }
    }
  }
}

cov_8o9uht0n8().s[210]++;

var parseHTML = function parseHTML(html) {
  cov_8o9uht0n8().f[21]++;
  var state = (cov_8o9uht0n8().s[211]++, data);
  cov_8o9uht0n8().s[212]++;

  var _iterator4 = _createForOfIteratorHelper(html),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var c = _step4.value;
      cov_8o9uht0n8().s[213]++;
      state = state(c);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  cov_8o9uht0n8().s[214]++;
  state = state(EOF);
  cov_8o9uht0n8().s[215]++;
  return stack;
};

exports.parseHTML = parseHTML;
