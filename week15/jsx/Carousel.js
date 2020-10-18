import { Component, createElement } from "./framework";
import { enableGesture } from "../flick/gesture";
import { Timeline, Animation } from "./animation";
import { ease } from "./ease";

const IMG_WIDTH = 330;

export class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null);
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    console.log(this.attributes);
    this.root = document.createElement("div");
    this.root.classList.add("carousel");
    for (let record of this.attributes.src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url('${record}')`;
      this.root.appendChild(child);
    }

    enableGesture(this.root);

    let timeline = new Timeline();

    timeline.start();

    let handler = null;

    let children = this.root.children;

    let position = 0;

    let t = 0;

    let ax = 0;

    this.root.addEventListener("start", (event) => {
      timeline.pause();
      clearInterval(handler);
      let progress = (Date.now() - t) / 500;
      ax = ease(progress) * IMG_WIDTH - IMG_WIDTH;
    });

    this.root.addEventListener("pan", (event) => {
      let x = event.clientX - event.startX - ax;
      let current = position - (x - (x % IMG_WIDTH)) / IMG_WIDTH;
      for (let offset of [-1, 0, 1]) {
        let pos = current + offset;
        pos = ((pos % children.length) + children.length) % children.length;

        console.log(pos);

        children[pos].style.transition = "none";
        children[pos].style.transform = `translateX(${
          -pos * IMG_WIDTH + offset * IMG_WIDTH + (x % IMG_WIDTH)
        }px)`;
      }
    });

    this.root.addEventListener("end", (event) => {
      timeline.reset();
      timeline.start();

      handler = setInterval(nextPic, 3000);

      let x = event.clientX - event.startX - ax;
      let current = position - (x - (x % IMG_WIDTH)) / IMG_WIDTH;

      let direction = Math.round((x % IMG_WIDTH) / IMG_WIDTH);

      if (event.isFlick) {
        if (event.velocity < 0) {
          direction = Math.ceil((x % IMG_WIDTH) / IMG_WIDTH);
        } else {
          direction = Math.floor((x % IMG_WIDTH) / IMG_WIDTH);
        }
        console.log("flick", event.velocity);
      }

      for (let offset of [-1, 0, 1]) {
        let pos = current + offset;
        pos = ((pos % children.length) + children.length) % children.length;

        console.log(pos);

        children[pos].style.transition = "none";

        timeline.add(
          new Animation(
            children[pos].style,
            "transform",
            -pos * IMG_WIDTH + offset * IMG_WIDTH + (x % IMG_WIDTH),
            -pos * IMG_WIDTH + offset * IMG_WIDTH + direction * IMG_WIDTH,
            500,
            0,
            ease,
            (v) => `translateX(${v}px)`
          )
        );
      }

      position = position - (x - (x % IMG_WIDTH)) / IMG_WIDTH - direction;
      position =
        ((position % children.length) + children.length) % children.length;
    });

    let nextPic = () => {
      let children = this.root.children;
      let nextIndex = (position + 1) % children.length;

      let current = children[position];
      let next = children[nextIndex];

      t = Date.now();

      timeline.add(
        new Animation(
          current.style,
          "transform",
          -position * IMG_WIDTH,
          -IMG_WIDTH - position * IMG_WIDTH,
          500,
          0,
          ease,
          (v) => `translateX(${v}px)`
        )
      );

      timeline.add(
        new Animation(
          next.style,
          "transform",
          IMG_WIDTH - nextIndex * IMG_WIDTH,
          -nextIndex * IMG_WIDTH,
          500,
          0,
          ease,
          (v) => `translateX(${v}px)`
        )
      );

      position = nextIndex;
    };

    handler = setInterval(nextPic, 3000);

    // 手动控制逻辑
    // this.root.addEventListener('mousedown', event => {
    //     console.log(event);
    //     let startX = event.clientX, startY = event.clientY;
    //     let children = this.root.children;

    //     let move = event => {
    //         console.log(event);
    //         let x = event.clientX - startX;

    //         let current = position -((x - x % IMG_WIDTH) / IMG_WIDTH);
    //         for(let offset of [-1, 0, 1]) {
    //             let pos = current + offset;
    //             pos = (pos + children.length) % children.length
    //             children[pos].style.transition = 'none';
    //             children[pos].style.transform = `translateX(${-pos* IMG_WIDTH + offset * IMG_WIDTH + x % IMG_WIDTH}px)`;
    //         }
    //     }

    //     let up = event => {
    //         let x = event.clientX - startX;

    //         position = position - Math.round(x / IMG_WIDTH)

    //         for(let offset of [-1, 0, -Math.sign(Math.round(x / IMG_WIDTH) - x + (IMG_WIDTH / 2) * Math.sign(x))]) {
    //             let pos = position + offset;
    //             pos = (pos + children.length) % children.length
    //             children[pos].style.transition = '';
    //             children[pos].style.transform = `translateX(${-pos* IMG_WIDTH + offset * IMG_WIDTH }px)`;
    //         }

    //         document.removeEventListener("mousemove", move);
    //         document.removeEventListener("mouseup", up);
    //     }

    //     document.addEventListener('mousemove', move);

    //     document.addEventListener('mouseup', up);

    // });

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
    parent.appendChild(this.render());
  }
}
