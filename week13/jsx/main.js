import { createElement } from './framework';
import { Carousel } from './Carousel';
import { Timeline, Animation} from './animation';


let d = [
    './images/1.webp',
    './images/2.webp',
    './images/3.webp',
    './images/4.webp',
]

let a = <Carousel src={d}/>

let tl = new Timeline();

window.tl = tl;
window.animation = new Animation({set a(v) {console.log(v)}}, 'a', 0, 100, 1000, null);

a.mountTo(document.body)

tl.start();