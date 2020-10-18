import { createElement } from "./framework";
import { Carousel } from "./Carousel";
import { Button } from "./Button";
import { List } from "./List";

let d = [
  {
    title: "title1",
    img: "./images/1.webp",
    url: "https://www.baidu.com",
  },
  {
    title: "title2",
    img: "./images/2.webp",
    url: "https://www.baidu.com",
  },
  {
    title: "title3",
    img: "./images/3.webp",
    url: "https://www.baidu.com",
  },
  {
    title: "title4",
    img: "./images/4.webp",
    url: "https://www.baidu.com",
  },
];

// let a = (
//   <Carousel
//     src={d}
//     onChange={(e) => {
//       console.log(e);
//       console.log(e.detail.position);
//     }}
//     onClick={(e) => {
//       debugger;
//       console.log(e);
//       window.location.href = e.detail.data.url;
//     }}
//   />
// );

// a.mountTo(document.body);

// 带容器的child
// let b = <Button>content</Button>;

// b.mountTo(document.body);

// 模板形的child
let c = (
  <List data={d}>
    {(record) => (
      <div>
        <img src={record.img} />
        <a href={record.url}>{record.title}</a>
      </div>
    )}
  </List>
);

c.mountTo(document.body);
