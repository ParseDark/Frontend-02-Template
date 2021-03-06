const TICK = Symbol('tick');
const TICK_HANDLER = Symbol('tick-handler');
const ANIMATIONS = Symbol('animations');
const START_TIME = Symbol('start-time');
const PAUSE_START = Symbol('pause-start');
const PAUSE_TIME = Symbol('pause-time');

export class Timeline {
    constructor() {
        this.state = "Inited";
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map();
    }

    start() {
        if(this.state !== 'Inited') {
            return;
        }
        this.state = 'Started';
        const startTime = Date.now();
        this[PAUSE_TIME] = 0;
        this[TICK] = () => {
            let now = Date.now();
            for(let animation of this[ANIMATIONS]) {
                let t;
                // 如果加入动画队列的行为先于时间轴的start, 那么以start的开始时间为准
                // 如果时间轴的start的行为先于加入动画队列的行为, 那么以加入动画的开始时间为准
                if(this[START_TIME].get(animation) < startTime) {
                    t = now - startTime - this[PAUSE_TIME] - animation.delay;
                }else {
                    t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay;
                }
                
                if(animation.duration  < t) {
                    this[ANIMATIONS].delete(animation);
                    t = animation.duration;
                }

                if (t > 0) {
                    animation.receiveTime(t);
                }
                
            }

            this[TICK_HANDLER] = requestAnimationFrame(this[TICK]);
        }

        this[TICK]();
    }

    pause() {
        if(this.state !== 'Started') {
            return;
        }
        this.state = 'Paused';
        this[PAUSE_START] = Date.now();
        cancelAnimationFrame(this[TICK_HANDLER]);
    }

    resume() {
        if(this.state !== 'Paused') {
            return;
        }
        this.state = 'Started';
        this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
        this[TICK]();
    }


    reset() {
        this.state = 'Inited';
        this.pause();
        this.startTime = Date.now();
        this[PAUSE_TIME] = 0;
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map();
        this[PAUSE_START] = 0;
        this[TICK_HANDLER] = null;
    }

    add(animation, startTime) {
        if(arguments.length < 2) {
            startTime = Date.now();
        }
        this[ANIMATIONS].add(animation);
        this[START_TIME].set(animation, startTime );
    }

    remove() {}
}

export class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        timingFunction = timingFunction || (v => v);
        template = template || (v => v);

        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.delay = delay;
        this.timingFunction = timingFunction;
        this.template = template;
    }

    receiveTime(time) {
        // console.log(time);
        debugger
        let range = this.endValue - this.startValue;
        let progress = this.timingFunction(time / this.duration);
        this.object[this.property] = this.template(this.startValue + range * progress);
    }
}
