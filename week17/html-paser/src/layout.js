function getStyle(element) {
    if (!element.style) {
        element.style = {};
    }

    for (let prop in element.computedStyle) {
        var p = element.computedStyle.value;
        element.style[prop] = element.computedStyle[prop].value;


        if (element.style[prop].toString().match(/px$/)) {
            element.style[prop] = parseInt(element.style[prop]);
        }

        if (element.style[prop].toString().match(/^[0-9\.]+$/)) {
            element.style[prop] = parseInt(element.style[prop]);
        }
    }
    return element.style;
}

function layout(element) {
    if (!element.computedStyle) {
        return;
    }

    var elementStyle = getStyle(element);

    // 目前只支持flex
    if (elementStyle.display !== 'flex') {
        return
    }

    // 过滤所有文本元素 
    var items = element.children.filter(e => e.type === 'element');

    // 处理order
    items.sort(function (a, b) {
        return (a.order || 0) - (b.order || 0);
    });

    var style = elementStyle;

    ['width', 'height'].forEach(size => {
        if (style[size] === 'auto' || style[size] === '') {
            style[size] = null;
        }
    });

    // 让数据变得可预测的一大方法是， 给予默认值
    if (!style.flexDirection || style.flexDirection === 'auto') {
        style.flexDirection = 'row';
    }

    if (!style.alignItems || style.alignItems === 'auto') {
        style.alignItems = 'stretch';
    }

    if (!style.justifyContent || style.justifyContent === 'auto') {
        style.justifyContent = 'flex-start';
    }

    if (!style.alignContent || style.alignContent === 'auto') {
        style.alignContent = 'stretch';
    }

    var mainSize, // 主轴尺寸
        mainStart, // 起始方向
        mainEnd, // 结束方向
        mainSign,// 说是从左开始去加， 但是为什么要加呢？从右往左排就是属性相减应该怎么理解？
        mainBase,// 有可能是一个从左开始或者从右的值？
        crossSize,
        crossStart,
        crossEnd,
        crossSign,
        crossBase;

    if (style.flexDirection === 'row') {
        mainSize = 'width';
        mainStart = 'left';
        mainEnd = 'right';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom';
    }

    if (style.flexDirection === 'row-reverse') {
        mainSize = 'width';
        mainStart = 'right';
        mainEnd = 'left';
        mainSign = -1;
        mainBase = style.width;

        crossSize = 'height';
        crossStart = 'top';
        crossEnd = 'bottom';
    }

    if (style.flexDirection === 'column') {
        mainSign = 'height';
        mainStart = 'top';
        mainEnd = 'bottom';
        mainSign = +1;
        mainBase = 0;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right';
    }

    if (style.flexDirection === 'column-reverse') {
        mainSign = 'height';
        mainStart = 'bottom';
        mainEnd = 'top';
        mainSign = -1;
        mainBase = style.height;

        crossSize = 'width';
        crossStart = 'left';
        crossEnd = 'right';
    }

    if (style.flexWrap === 'wrap-reverse') {
        var tmp = crossStart;
        crossStart = crossEnd;
        crossEnd = tmp;
        crossSign = -1;
    } else {
        crossBase = 0;
        crossSign = 1;
    }

    // 如果主轴没有设置width属性， 那么就会进入automainsize mode.意思是， 由子元素撑开父级元素
    var isAutoMainSize = false;
    if (!style[mainSize]) {
        elementStyle[mainSize] = 0;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (itemStyle[mainSize] !== null || itemStyle[mainSize] !== (void 0)) {
                elementStyle[mainSize] = elementStyle[mainSize] + itemStyle[mainSize];
            }
        }
        isAutoMainSize = true;
    }

    var flexLine = [];
    var flexLines = [flexLine];

    // 剩余空间
    var mainSpace = elementStyle[mainSize];
    var crossSpace = 0;

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemStyle = getStyle(item);

        if (itemStyle[mainSize] === null) {
            itemStyle[mainSize] = 0;
        }

        if (itemStyle.flex) {
            flexLine.push(item);
        } else if (style.flexWrap === 'nowrap' && isAutoMainSize) {
            // 处理不换行的情况
            mainSpace -= itemStyle[mainSize];
            if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
                // 确定行高
                crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
            }
            flexLine.push(item);
        } else {
            // 如果子元素高度比父元素大， 压缩子元素
            if (itemStyle[mainSize] > style[mainSize]) {
                itemStyle[mainSize] = style[mainSize];
            }
            // 具体超高换行逻辑
            if (mainSpace < itemStyle[mainSize]) {
                // 主轴剩余空间
                flexLine.mainSpace = mainSpace;
                // 交叉轴剩余空间
                flexLine.crossSpace = crossSpace;
                // 开一个新行， 存入flexLines
                flexLine = [item];
                flexLines.push(flexLine);

                // 重置main_space/ cross_space
                mainSpace = style[mainSize];
                crossSpace = 0;
            } else {
                // 如果可以放下， 则直接push进当前的行
                flexLine.push(item);
            }

            // 重新计算主轴和交叉轴的剩余空间
            if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
                crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
            }

            mainSpace -= itemStyle[mainSize];


        }

    }

    flexLine.mainSpace = mainSpace;

    console.log(items);

    if (style.flexWrap === 'nowrap' || isAutoMainSize) {
        flexLine.crossSpace = (style[crossSize] !== undefined) ? style[crossSize] : crossSpace;
    } else {
        flexLine.crossSpace = crossSpace;
    }

    // 没有剩余空间时， 等比压缩
    if (mainSpace < 0) {
        var scale = style[mainSize] / (style[mainSize] - mainSpace);
        var currentMain = mainBase;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemStyle = getStyle(item);
            // 如果是flex的元素， 直接把他的size变为0j
            if (itemStyle.flex) {
                itemStyle[mainSize] = 0;
            }

            // 计算出相关位置属性： size/start/end => width/left/right (根据主轴方向而定)
            itemStyle[mainSize] = itemStyle[mainSize] * scale;

            itemStyle[mainStart] = currentMain;
            itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSize];
            currentMain = itemStyle[mainEnd];
        }
    } else {
        // 有剩余空间时， 等比增加元素size
        flexLines.forEach(function (items) {
            var mainSpace = items.mainSpace;
            var flexTotal = 0;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var itemStyle = getStyle(item);

                if ((itemStyle.flex !== null) && (itemStyle.flex !== (void 0))) {
                    flexTotal += itemStyle.flex;
                    continue;
                }
            }

            if (flexTotal > 0) {
                // flex element handle
                var currentMain = mainBase;
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var itemStyle = getStyle(item);

                    if (itemStyle.flex) {
                        itemStyle[mainSize] = (mainSpace / flexTotal) * itemStyle.flex;
                    }

                    itemStyle[mainStart] = currentMain;
                    itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSize];

                    currentMain = itemStyle[mainEnd];
                }
            } else {
                // not flex item
                if (style.justifyContent === 'flex-start') {
                    var currentMain = mainBase;
                    var step = 0;
                }

                if (style.justifyContent === 'flex-end') {
                    var currentMain = mainSpace * mainSign + mainBase;
                    var step = 0;
                }

                if (style.justifyContent === 'center') {
                    var currentMain = mainBase
                    var step = mainSpace / (items.length - 1) * mainSign;
                }

                if (style.justifyContent === 'space-between') {
                    var step = mainSpace / (items.length - 1) * mainSign;
                    var currentMain = mainBase;
                }

                if (style.justifyContent === 'space-around') {
                    var step = mainSpace / items.length * mainSign;
                    var currentMain = step / 2 + mainBase;
                }

                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    itemStyle[mainStart, currentMain];
                    itemStyle[mainEnd] = itemStyle[mainStart] + mainSign * itemStyle[mainSize];
                    currentMain = itemStyle[mainEnd] + step;
                }
            }

        });
    }
    // =========================computed the cross axis size============================
    // computed the cross axis size
    // align-items, align-self
    var crossSpace;

    if (!style[crossSize]) {
        // auto size

        crossSpace = 0;
        elementStyle[crossSize] = 0;
        // 计算子元素撑开的高度
        for (var i = 0; i < flexLines.length; i++) {
            elementStyle[crossSize] = elementStyle[crossSize] + flexLines[i].crossSpace;
        }
    } else {
        // 如果存在行高， 则需要减去每一行的行高， 得到剩余行高
        crossSpace = style[crossSize];
        for (var i = 0; i < flexLines.length; i++) {
            crossSpace -= flexLines[i].crossSpace;
        }
    }

    // 如果是reverse 那么从底部往上排列
    if (style.flexWrap === 'wrap-reverse') {
        crossBase = style[crossSize];
    } else {
        crossBase = 0;
    }
    // 单行交叉轴高度为总的cross轴高度， 除以行数
    var lineSize = style[crossSize] / flexLines.length;

    var step;
    if (style.alignContent === 'flex-start') {
        crossBase += 0;
        step = 0;
    }

    if (style.alignContent === 'flex-end') {
        crossBase += crossSign * crossSpace;
        step = 0;
    }

    if (style.alignContent === 'center') {
        crossBase += crossSign * crossSpace / 2;
        step = 0;
    }

    if (style.alignContent === 'space-between') {
        crossBase += 0;
        step = crossSpace / (flexLines.length - 1);
    }

    if (style.alignContent === 'stretch') {
        crossBase += 0;
        step = 0;
    }

    flexLines.forEach(function (items) {
        var lineCrossSize = style.alignContent === 'stretch' ? items.crossSpace + crossSpace / flexLines.length : items.crossSpace;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemStyle = getStyle(item);

            var align = itemStyle.alignSelf || style.alignItems;

            if (itemStyle[crossSize] === null) {
                itemStyle[crossSize] = (align === 'stretch') ? lineCrossSize : 0;
            }

            if (align === 'flex-start') {
                itemStyle[crossStart] = crossBase;
                itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
            }

            if (align === 'flex-end') {
                itemStyle[crossStart] = crossBase + crossSign * lineCrossSize;
                itemStyle[crossEnd] = itemStyle[crossStart] - crossSign * itemStyle[crossSize];
            }

            if (align === 'center') {
                itemStyle[crossStart] = crossBase + crossSign * (lineCrossSize - itemStyle[crossSize] / 2);
                itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
            }

            if (align === 'stretch') {
                itemStyle[crossStart] = crossBase;
                itemStyle[crossEnd] = crossBase + crossSign * ((itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) ? itemStyle[crossSize] : lineCrossSize);

                itemStyle[crossSize] = crossSign * (itemStyle[crossEnd] - itemStyle[crossStart]);
            }
        }

        crossBase += crossSign * (lineCrossSize + step);
    });

    console.log(items);
}

module.exports = layout;