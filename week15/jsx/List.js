import { createElement, Component, STATE, ATTRIBUTES } from "./framework";
export { STATE, ATTRIBUTES } from "./framework";

export class List extends Component {
  constructor() {
    super();
  }

  render() {
    this[ATTRIBUTES].data;
    this.children = this[ATTRIBUTES].data.map(this.template);
    this.root = (<div>{this.children}</div>).render();
    return this.root;
  }

  appendChild(child) {
    this.template = child;
    this.render();
  }
}
