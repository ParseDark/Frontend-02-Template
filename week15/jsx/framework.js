export function createElement(type, attributes, ...children) {
  let element;

  if (typeof type === "string") element = new ElementWrapper(type);
  else element = new type();

  for (let name in attributes) {
    element.setAttribute(name, attributes[name]);
  }

  for (let child of children) {
    if (typeof child === "string") {
      child = new TextWrapper(child);
    }
    element.appendChild(child);
  }
  return element;
}

export const STATE = Symbol("state");
export const ATTRIBUTES = Symbol("attributes");

export class Component {
  constructor(type) {
    this[ATTRIBUTES] = Object.create(null);
    this[STATE] = Object.create(null);
  }
  setAttribute(name, value) {
    this[ATTRIBUTES][name] = value;
  }
  appendChild(child) {
    child.mountTo(this.root);
  }
  mountTo(parent) {
    if (!this.root) {
      this.render();
    }
    parent.appendChild(this.root);
  }
  triggerEvent(type, args) {
    const typeName = "on" + type.replace(/^[\s\S]/, (s) => s.toUpperCase());
    this[ATTRIBUTES][typeName](new CustomEvent(type, { detail: args }));
  }
}

class TextWrapper extends Component {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    this.root = document.createElement(type);
  }
}
