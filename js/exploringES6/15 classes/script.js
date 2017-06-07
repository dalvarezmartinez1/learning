console.log(`
A class and a subclass in ES6, note they have no semicolon after method declarations, if they had it would be ignored:

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);// You must call super before you can use 'this'. Leaving super out also results in an error
        this.color = color;
    }
    static staticMethod() {
        return 'classy';
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}
`);

console.log(`
Unlike functions, class definitions are not hoisted:
new Foo(); // ReferenceError
class Foo {}
`);


console.log(`
Classes can be declared in class expressions as well, just like functions. Here an example of anonymous class expression:
const MyClass = class {
};
const inst = new MyClass();
`);

console.log(`
If an object has a method whose key is Symbol.iterator, it is iterable. This is achieved via computed keys:
class IterableClass {
    [Symbol.iterator]() {
        ···
    }
}
`)

console.log(`
There are four ways of keeping data private in a class:
1. Private data via constructor environments:
class Countdown {
    constructor(counter, action) {
        Object.assign(this, {
            dec() {
                if (counter === 0) {
                    action();
                }
            }
        });
    }
}

2.Private data via a naming convention
class Countdown {
    constructor(counter, action) {
        this._counter = counter;
        this._action = action;
    }
    dec() {
        if (this._counter === 0) {
            this._action();
        }
    }
}

3. Private data via weakmaps
const _counter = new WeakMap();
const _action = new WeakMap();
class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }
    dec() {
        let counter = _counter.get(this);
        if (counter === 0) {
            _action.get(this)();
        }
    }
}

4. Private data via symbols
const _counter = Symbol('counter');
const _action = Symbol('action');

class Countdown {
    constructor(counter, action) {
        this[_counter] = counter;
        this[_action] = action;
    }
    dec() {
        if (this[_counter] === 0) {
            this[_action]();
        }
    }
}
`)

