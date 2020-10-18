let element = document.documentElement;

let contexts = new Map();

let isListeningMouse = false;

element.addEventListener('mousedown', (e) => {
    let context = Object.create(null);
    contexts.set("mouse" + (1 << e.button), context);

    start(e, context);

    let mouseMove = event => {
        let button = 1;

        while(button <= event.buttons) {
            if(button & event.buttons) {
                // order of buttons & button property is not same
                let key;
                if(button === 2) {
                    key = 4;
                } else if(button === 4)  {
                    key = 2;
                } else {
                    key = button;
                }
                
                let context = contexts.get('mouse' + key);
                move(event, context);
            }
            button = button << 1;
        }
        
        
    };
    let mouseUp = event => {
        let context = contexts.get('mouse' + (1 << event.button));

        end(event, context);

        contexts.delete('mouse' + (1 << event.button));

        if(event.buttons === 0) {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
            isListeningMouse = false;
        }
   };

    if(!isListeningMouse) {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        isListeningMouse = true;
    }
});




// event 可以存在多个触点, 多点触控
element.addEventListener('touchstart', event => {
    for(let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context);
    }

});


element.addEventListener('touchmove', event => {
    for(let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        move(touch, context);
    }
});

element.addEventListener('touchend', event => {
    for(let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        end(touch, context);
        contexts.delete(touch.identifier);
    }
});

element.addEventListener('touchcancel', event => {
    for(let touch of event.changedTouches) {
        cancel(touch);
    }
});

let handler;

let startX, startY;

let isPan = false, isTap = true, isPress = false;

let start = (point, context) => {
    console.log('start', point.clientX, point.clientY);

    context.startX = point.clientX;
    context.startY = point.clientY;

    context.isTap = true;
    context.isPan = false;
    context.isPress = false;

    context.handler = setTimeout(() => {
        context.isTap = true;
        context.isPan = false;
        context.isPress = false;
        context.handler = null;
        console.log('pressEvent');
    }, 500);
};

let move = (point, context) => {
    let dx = point.clientX - context.startX;
    let dy = point.clientY - context.startY;

    // move 10px
    if(!context.isPan && (dx ** 2 + dy ** 2 > 100)) {
        context.isTap = false;
        context.isPan = true;
        context.isPress = false;
 
        console.log('pressStart');
        clearTimeout(context.handler);
    }

    if(context.isPan) {
        console.log(dx, dy);
        console.log('pan')
    }
    // console.log('move', point.clientX, point.clientY);

};

let end = (point, context) => {
    if(context.isTap) {
        console.log('tap');
        dispatch('tap', {});
        clearTimeout(context.handler);
    }

    if(context.isPan) {
        console.log('panEnd');
    }

    if(context.isPress) {
        console.log('pressEnd');
    }
    console.log('end', point.clientX, point.clientY);
};

let cancel = (point) => {
    console.log('cancel', point.clientX, point.clientY);
    clearTimeout(handler);
};


function dispatch(type, properties) {
    let event = new Event(type);
    console.log(event);
    for(let name in properties) {
        event[name] = properties[name];
    }

    element.dispatchEvent(event);
}