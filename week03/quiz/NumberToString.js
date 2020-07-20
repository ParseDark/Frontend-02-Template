

const intCoverBinaryString = (num) => {
    return new Number(num).toString(2);
}

const intCoverToOctalString = (num) => {
    return new Number(num).toString(8);
}

const intCoverToHexString = (num) => {
    return new Number(num).toString(16);
}

const intCoverIntString = (str) => String(str);

const typeMapCover = {
    binary: intCoverBinaryString,
    hex: intCoverToHexString,
    octal: intCoverToOctalString,
    int: intCoverIntString,
}


// type 为进制类型
const NumberToString = (num, type) => {
    // 1. num转对应的type
    const coverFn = typeMapCover[type];
    console.log('num is', num, "type is", type);
    // 2. 转化后的num转字符串
    if (coverFn) {
        return coverFn(num);
    }

    return `${num} can't cover to ${type} type.`
};

console.log(NumberToString(16, 'hex'));

