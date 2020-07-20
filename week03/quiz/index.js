// import { pipeline } from './helper';
const chartMapNumber = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};
const JudgeNumType = str => {
    const regxMapType = {
        binary: /0b[1|0]+/,
        hex: /0x[0-9ABCDEF]+/i,
        octal: /0[0-7]+/,
        int: /[0-9]+[.][0-9]+|[0-9]+.|[0-9]+.[0-9]+|.[0-9]+/
    };

    const result = Object.entries(regxMapType).find(([key, reg]) => {
        return reg.test(str);
    });

    if (!result) {
        return false;
    }

    return result[0];
};

const binaryCoverToInt = (str) => str
    .slice(2)
    .split('')
    .reverse()
    .reduce((result, current, index) => {
        result += current * 2 ** index;
        return result;
    }, 0);

const octalCoverToInt = (str) => str
    .slice(1)
    .split('')
    .reverse()
    .reduce((result, current, index) => {
        result += current * 8 ** index;
        return result;
    }, 0);

const hexCoverToInt = (str) => str
    .slice(2)
    .split('')
    .reverse()
    .map(x => {
        if (/[ABCDEF]/i.test(x)) {
            return chartMapNumber(x.toLocaleUpperCase());
        }
        return x;
    })
    .reduce((result, current, index) => {
        result += current * 16 ** index;
        return result;
    }, 0);

const intCoverInt = (str) => +str;

// 不同进制的number的string, 转为number形式
// 0x11
const StringToNumber = (str) => {
    // 1. 判定是否是number
    const preType = JudgeNumType(str);
    // 2. 判定是哪种number类型
    console.log('type is', preType);
    if (preType === 'binary') {
        return binaryCoverToInt(str);
    }

    if (preType === 'hex') {
        return hexCoverToInt(str)
    }

    if (preType === 'octal') {
        return octalCoverToInt(str)
    }

    if (preType === 'int') {
        return intCoverInt(str);
    }
    return `${str} not a coverable number.`;
};

console.log("result: ======> " + StringToNumber("10.10"));


// type 为进制类型
const NumberToString = (num, type) => {
    // 1. num转对应的type

    // 2. 转化后的num转字符串
};