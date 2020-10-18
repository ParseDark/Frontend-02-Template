export class Dispatcher {
  constructor(element) {
    this.element = element;
  }

  dispatch(type, properties) {
    let event = new Event(type);
    for (let name in properties) {
      event[name] = properties[name];
    }

    this.element.dispatchEvent(event);
  }
}

export function dispatch(type, properties) {
  let event = new Event(type);
  for (let name in properties) {
    event[name] = properties[name];
  }

  element.dispatchEvent(event);
}

// 信息流向： Listener => recognize => dispatch

// new Listener(new Recognizer(dispatch))

export class Listener {
  constructor(element, recognizer) {
    let contexts = new Map();
    let isListeningMouse = false;

    element.addEventListener("mousedown", (e) => {
      let context = Object.create(null);
      contexts.set("mouse" + (1 << e.button), context);

      recognizer.start(e, context);

      let mouseMove = (event) => {
        let button = 1;

        while (button <= event.buttons) {
          if (button & event.buttons) {
            // order of buttons & button property is not same
            let key;
            if (button === 2) {
              key = 4;
            } else if (button === 4) {
              key = 2;
            } else {
              key = button;
            }

            let context = contexts.get("mouse" + key);
            recognizer.move(event, context);
          }
          button = button << 1;
        }
      };
      let mouseUp = (event) => {
        let context = contexts.get("mouse" + (1 << event.button));

        recognizer.end(event, context);

        contexts.delete("mouse" + (1 << event.button));

        if (event.buttons === 0) {
          document.removeEventListener("mousemove", mouseMove);
          document.removeEventListener("mouseup", mouseUp);
          isListeningMouse = false;
        }
      };

      if (!isListeningMouse) {
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
        isListeningMouse = true;
      }
    });

    // event 可以存在多个触点, 多点触控
    element.addEventListener("touchstart", (event) => {
      for (let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    });

    element.addEventListener("touchmove", (event) => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.move(touch, context);
      }
    });

    element.addEventListener("touchend", (event) => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.end(touch, context);
        contexts.delete(touch.identifier);
      }
    });

    element.addEventListener("touchcancel", (event) => {
      for (let touch of event.changedTouches) {
        recognizer.cancel(touch, context);
      }
    });
  }
}

export class Recognizer {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
  start(point, context) {
    context.points = [
      {
        t: Date.now(),
        x: point.clientX,
        y: point.clientY,
      },
    ];
    this.dispatcher.dispatch("start", {
      clientX: point.clientX,
      clientY: point.clientY,
    });

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
      this.dispatcher.dispatch("press", {});
    }, 500);
  }
  move(point, context) {
    let dx = point.clientX - context.startX;
    let dy = point.clientY - context.startY;

    // move 10px
    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      context.isVertical = Math.abs(dx) < Math.abs(dy);

      this.dispatcher.dispatch("pressStart", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
      });
      clearTimeout(context.handler);
    }

    if (context.isPan) {
      this.dispatcher.dispatch("pan", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
      });
    }

    context.points = context.points.filter(
      (point) => Date.now() - point.t < 500
    );

    context.points.push({
      t: Date.now(),
      x: point.clientX,
      y: point.clientY,
    });
  }
  end(point, context) {
    if (context.isTap) {
      this.dispatcher.dispatch("tap", {});
      clearTimeout(context.handler);
    }

    if (context.isPress) {
      this.dispatcher.dispatch("pressEnd", {});
    }

    let d, v;

    if (!context.points.length) {
      v = 0;
    } else {
      context.points = context.points.filter(
        (point) => Date.now() - point.t < 500
      );
      // computed the move speed
      d = Math.sqrt(
        (point.clientX - context.points[0].x) ** 2 +
          (point.clientY - context.points[0].y) ** 2
      );
      v = d / (Date.now() - context.points[0].t);
    }

    if (v > 1.5) {
      this.dispatcher.dispatch("flick", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        velocity: v,
      });
      context.isFlick = true;
    } else {
      context.isFlick = false;
    }

    if (context.isPan) {
      this.dispatcher.dispatch("panEnd", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        velocity: v,
      });
    }

    this.dispatcher.dispatch("end", {
      startX: context.startX,
      startY: context.startY,
      clientX: point.clientX,
      clientY: point.clientY,
      isVertical: context.isVertical,
      isFlick: context.isFlick,
      velocity: v,
    });
  }
  cancel(point, context) {
    this.dispatcher.dispatch("cancel", {
      startX: context.startX,
      startY: context.startY,
      clientX: point.clientX,
      clientY: point.clientY,
      isVertical: context.isVertical,
      isFlick: context.isFlick,
    });
    clearTimeout(handler);
  }
}

export function enableGesture(element) {
  new Listener(element, new Recognizer(new Dispatcher(element)));
}
