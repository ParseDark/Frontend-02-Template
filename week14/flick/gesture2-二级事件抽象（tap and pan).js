let element = document.documentElement;

element.addEventListener('mousedown', (e) => {
    start(e);


    let mouseMove = event => {
        move(event);
    };
    let mouseUp = event => {
        end(event);
        element.removeEventListener('mousemove', mouseMove);
        element.removeEventListener('mouseup', mouseUp);
    };

    element.addEventListener('mousemove', mouseMove);
    element.addEventListener('mouseup', mouseUp);
});

// event 可以存在多个触点, 多点触控
element.addEventListener('touchstart', event => {
    for(let touch of event.changedTouches) {
        start(touch);
    }

});


element.addEventListener('touchmove', event => {
    for(let touch of event.changedTouches) {
        move(touch);
    }
});

element.addEventListener('touchend', event => {
    for(let touch of event.changedTouches) {
        end(touch);
    }
});

element.addEventListener('touchcancel', event => {
    for(let touch of event.changedTouches) {
        cancel(touch);
    }
});

let handler;

let startX, startY;

let isPan = false, isTap = true;

let start = (point) => {
    console.log('start', point.clientX, point.clientY);

    startX = point.clientX;
    startY = point.clientY;

    isTap = true;
    isPan = false;
    isPress = false;

    handler = setTimeout(() => {
        isTap = true;
        isPan = false;
        isPress = false;
        handler = null;
        console.log('pressEvent');
    }, 500);
};

let move = (point) => {
    let dx = point.clientX - startX;
    let dy = point.clientY - startY;

    // move 10px
    if(!isPan && (dx ** 2 + dy ** 2 > 100)) {
        isTap = true;
        isPan = true;
        isPress = false;
 
        console.log('pressStart');
        clearTimeout(handler);
    }

    if(isPan) {
        console.log(dx, dy);
        console.log('pan')
    }
    // console.log('move', point.clientX, point.clientY);

};

let end = (point) => {
    if(isTap) {
        console.log('tap');
        clearTimeout(handler);
    }

    if(isPan) {
        console.log('panEnd');
    }

    if(isPress) {
        console.log('pressEnd');
    }
    console.log('end', point.clientX, point.clientY);
};

let cancel = (point) => {
    console.log('cancel', point.clientX, point.clientY);
    clearTimeout(handler);
};