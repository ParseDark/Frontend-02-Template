import { createElement } from "./framework";
import { Carousel } from "./Carousel";
import { Timeline, Animation } from "./animation";

let d = [
  {
    img: "./images/1.webp",
    url: "https://www.baidu.com",
  },
  {
    img: "./images/2.webp",
    url: "https://www.baidu.com",
  },
  {
    img: "./images/3.webp",
    url: "https://www.baidu.com",
  },
  {
    img: "./images/4.webp",
    url: "https://www.baidu.com",
  },
];

let a = (
  <Carousel
    src={d}
    onChange={(e) => {
      console.log(e);
      console.log(e.detail.position);
    }}
    onClick={(e) => {
      debugger;
      console.log(e);
      window.location.href = e.detail.data.url;
    }}
  />
);

let tl = new Timeline();

window.tl = tl;
window.animation = new Animation(
  {
    set a(v) {
      console.log(v);
    },
  },
  "a",
  0,
  100,
  1000,
  null
);

a.mountTo(document.body);

tl.start();
