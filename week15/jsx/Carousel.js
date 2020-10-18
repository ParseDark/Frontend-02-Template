import { Component, createElement, STATE, ATTRIBUTES } from "./framework";
import { enableGesture } from "../flick/gesture";
import { Timeline, Animation } from "./animation";
import { ease } from "./ease";
export { STATE, ATTRIBUTES } from "./framework";

const IMG_WIDTH = 330;

export class Carousel extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.attributes);
    this.root = document.createElement("div");
    this.root.classList.add("carousel");
    for (let record of this[ATTRIBUTES].src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url('${record.img}')`;
      this.root.appendChild(child);
    }

    enableGesture(this.root);

    let timeline = new Timeline();

    timeline.start();

    let handler = null;

    let children = this.root.children;

    this[STATE].position = 0;

    let t = 0;

    let ax = 0;

    this.root.addEventListener("start", (event) => {
      timeline.pause();
      clearInterval(handler);
      let progress = (Date.now() - t) / 500;
      ax = ease(progress) * IMG_WIDTH - IMG_WIDTH;
    });

    this.root.addEventListener("tap", (event) => {
      const currentPosition = this[STATE].position;
      const data = this[ATTRIBUTES].src[currentPosition];
      this.triggerEvent("click", {
        data,
        position: currentPosition,
      });
    });

    this.root.addEventListener("pan", (event) => {
      let x = event.clientX - event.startX - ax;
      let current = this[STATE].position - (x - (x % IMG_WIDTH)) / IMG_WIDTH;
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
      let current = this[STATE].position - (x - (x % IMG_WIDTH)) / IMG_WIDTH;

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

      this[STATE].position =
        this[STATE].position - (x - (x % IMG_WIDTH)) / IMG_WIDTH - direction;
      this[STATE].position =
        ((this[STATE].position % children.length) + children.length) %
        children.length;

      this.triggerEvent("change", { position: this[STATE].position });
    });

    let nextPic = () => {
      let children = this.root.children;
      let nextIndex = (this[STATE].position + 1) % children.length;

      let current = children[this[STATE].position];
      let next = children[nextIndex];

      t = Date.now();

      timeline.add(
        new Animation(
          current.style,
          "transform",
          -this[STATE].position * IMG_WIDTH,
          -IMG_WIDTH - this[STATE].position * IMG_WIDTH,
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

      this[STATE].position = nextIndex;
      this.triggerEvent("change", { position: this[STATE].position });
    };

    handler = setInterval(nextPic, 3000);

    return this.root;
  }
}
