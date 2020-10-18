import { Timeline, Animation} from './animation.js';

import { ease, easeIn, easeOut, easeInOut} from './ease.js';

let tl = new Timeline();

tl.start();

debugger

tl.add(new Animation(document.querySelector('#el1').style, 'transform', 0, 1000, 5000, 0, ease, v => `translateX(${v}px)`));

tl.add(new Animation(document.querySelector('#el2').style, 'transform', 0, 1000, 5000, 0, easeIn, v => `translateX(${v}px)`));

tl.add(new Animation(document.querySelector('#el3').style, 'transform', 0, 1000, 5000, 0, easeOut, v => `translateX(${v}px)`));

tl.add(new Animation(document.querySelector('#el4').style, 'transform', 0, 1000, 5000, 0, easeInOut, v => `translateX(${v}px)`));


document.querySelector('#pause').addEventListener('click', () => {
    tl.pause();
});

document.querySelector('#resume').addEventListener('click', () => {
    tl.resume();
});

document.querySelector('#reset').addEventListener('click', () => {
    tl.reset();
});