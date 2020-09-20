import { Component, createElement } from './framework';

const IMG_WIDTH = 330;

class Carousel extends Component{
    constructor() {
        super()
        this.attributes = Object.create(null);
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        console.log(this.attributes);
        this.root = document.createElement('div');
        this.root.classList.add('carousel');
        for(let record of this.attributes.src) {
            let child = document.createElement("div");
            child.style.backgroundImage =`url('${record}')`;
            this.root.appendChild(child);
        }

        let position =   0;

        // 手动控制逻辑
        this.root.addEventListener('mousedown', event => {
            console.log(event);
            let startX = event.clientX, startY = event.clientY;
            let children = this.root.children;

            let move = event => {
                console.log(event);
                let x = event.clientX - startX;

                let current = position -((x - x % IMG_WIDTH) / IMG_WIDTH);
                for(let offset of [-1, 0, 1]) {
                    let pos = current + offset;
                    pos = (pos + children.length) % children.length
                    children[pos].style.transition = 'none';
                    children[pos].style.transform = `translateX(${-pos* IMG_WIDTH + offset * IMG_WIDTH + x % IMG_WIDTH}px)`;
                }
            }

            let up = event => {
                let x = event.clientX - startX;

                position = position - Math.round(x / IMG_WIDTH)
                

                for(let offset of [-1, 0, -Math.sign(Math.round(x / IMG_WIDTH) - x + (IMG_WIDTH / 2) * Math.sign(x))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length
                    children[pos].style.transition = '';
                    children[pos].style.transform = `translateX(${-pos* IMG_WIDTH + offset * IMG_WIDTH }px)`;
                }


                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            }

            document.addEventListener('mousemove', move);

            document.addEventListener('mouseup', up);

        });





        // 自动轮播逻辑
        // let currentIndex = 0;

        // setInterval(() => {
        //     let children = this.root.children;
        //     let nextIndex = (currentIndex + 1) % children.length;

        //     let current = children[currentIndex];
        //     let next = children[nextIndex];

        //     next.style.transition =  `none`;
        //     next.style.transform =  `translateX(${100 - nextIndex * 100}%)`;

        //     setTimeout(() => {
        //         next.style.transition = '';
        //         current.style.transform =  `translateX(${-100 - currentIndex * 100}%)`;
        //         next.style.transform =  `translateX(${- nextIndex * 100}%)`;
        //         currentIndex = nextIndex;
        //     }, 16);


        // }, 330);

        return this.root;
    }
    mountTo(parent) {
        parent.appendChild(this.render())
    }
}

let d = [
    './images/1.webp',
    './images/2.webp',
    './images/3.webp',
    './images/4.webp',
]

let a = <Carousel src={d}/>

// document.body.appendChild(a);

a.mountTo(document.body)