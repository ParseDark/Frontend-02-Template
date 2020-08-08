(() => {

    // 创造对应dom结构
    document.querySelector('#ntp-contents').innerHTML = `
        <div>
            <div class="myClass" id="myId">biu</div>
            <div class="myClass" id="myId1">biu</div>
        </div>    
        <span>
            <div class="myClass" id="myId2">biu</div>
        </span>    
    `

    // 判定选择器类型
    const isClass = s => s.includes('.');
    const isId = s => s.includes('#');
    const classify = s => isClass(s) ? 'className' : (isId(s) ? 'id' : 'tag');

    // 取到对应选择器的值， 去除干扰元素(eg: . #)
    const handlerMap = {
        className: (v) => v.slice(1),
        id: (v) => v.slice(1),
        tag: (v) => v,
    }

    const handlerFn = (type) => handlerMap[type];

    // 正则解析selector字符串
    const parseStr = (s) => {
        const arr = s.match(/([#\.][0-9a-zA-Z-_]+)/g);
        return Array.isArray(arr) ? arr
            .map(i => ({ type: classify(i), value: i }))
            .map(({ type, value }) => ({ type, value: handlerFn(type)(value) })) : [{
                type: 'tag',
                value: s,
            }];
    }

    // 根据空格解析selector字符串， 但是我没有支持复杂情况（ > ~ + ||）
    const parserSelector = (str) => str.split(' ').map(s => parseStr(s));

    // 从dome取到对应的信息
    const parseDom = dom => ({
        tag: dom.tagName.toLocaleLowerCase(),
        className: dom.className,
        id: dom.id,
    });

    const compare = (selector, domProps) => {
        return selector.every(({ type, value }) => domProps[type] ? domProps[type] === value : false);
    }

    function match(selector, element) {
        // 解析选择器， 返回的结构为
        // [[{type, value}], ...]
        var currentDom = element;
        var result = false;
        var isFirst = true;
        const arr = parserSelector(selector);
        var topSelector = arr.pop(); // arr

        while (topSelector || !currentDom) {
            result = compare(topSelector, parseDom(currentDom));
            if (isFirst && !result) break;
            isFirst = false;
            currentDom = currentDom.parentNode;
            topSelector = arr.pop();
        }


        console.log(result);
        return result;
    }


    match("div #myId2.myClass", document.querySelector('#myId2')); // false
    // match("div #myId.myClass", document.querySelector('#myId1')); // false
    // match("div #myId.myClass", document.querySelector('#myId')); // true
})();


