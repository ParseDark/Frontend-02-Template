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

let start = (point) => {
    console.log('start', point.clientX, point.clientY);
};

let move = (point) => {
    console.log('move', point.clientX, point.clientY);
};

let end = (point) => {
    console.log('end', point.clientX, point.clientY);
};

let cancel = (point) => {
    console.log('cancel', point.clientX, point.clientY);
};