# New OOP features besides classes

** ES6 includes new features for object literals and new utility methods in Object, besides classes**

```
console.log(`
Object literals can be methods now:
const obj = {
    myMethod(x, y) {
    }
};
`);

console.log(`
Object literals can be shorthanded from property
const first = 'Jane';
const last = 'Doe';

const obj = { first, last };
// Same as:
const obj = { first: first, last: last };
`);

console.log(`
Object literals can be computed:
const propKey = 'foo';
const obj = {
    [propKey]: true,
    ['b'+'ar']: 123,
    ['h'+'ello']() {
        return 'hi';
    }
};
`);

console.log(`
Object.assign(target, source_1, source_2, ···) has been added. Note that it only works with enumerable properties.
const obj = { foo: 123 };
Object.assign(obj, { bar: true }); // {"foo":123,"bar":true}
`);

console.log(`
Object.is(obj1, obj2) is better than === for comparing.
Object.is(NaN, NaN) // true
Object.is(-0, +0) // false
everything else is compared using ===
`);

console.log(`Traversing properties: 
Object.keys(obj) - retrieves all STRING keys of all ENUMERABLE OWN (non-inherited props).
Object.getOwnPropertyNames(obj) - retrieves all STRING keys of all OWN props. Note: doesn't matter if they are enumerable or not.
Object.getOwnPropertySymbols(obj) - retrieves all SYMBOL keys of all OWN props. Note: doesn't matter if they are enumerable or not.
Reflect.ownKeys(obj) - retrieves ALL keys of all OWN properties.
`);

console.log(`Assigning versus defining properties.
Assigning: obj.prop = 123
Defining: Object.defineProperty(obj, 'prop', 123)
There are 3 cases in which assigning does not create an own property:
1. A read-only property prop exists in the prototype chain. Then the assignment causes a TypeError in strict mode.
2. A setter for prop exists in the prototype chain. Then that setter is called.
3. A getter for prop without a setter exists in the prototype chain. Then a TypeError is thrown in strict mode. This case is similar to the first one.
`);

console.log(`
Each object has a property called __proto__. This is an object which contains the prototype properties of our object.
Some functions(constructor functions for example) have a 'prototype' property which is the prototype of objects contructed by this constructor function.
One of the prototype properties is: [[Prototype]] which is basically how objects point to the next prototype in the the prototype chain. If it's null, it means the chain is over.
Preferred ways of dealing with the prototype is by avoiding the use of __proto__, use Object.getPrototypeOf(obj), Object.create(protoObj), obj.isPrototypeOf(obj)
`);

console.log(`
Enumerability in ECMAScript 6: Enumerability is an attribute of object properties.
ECMAScript 6 supports the following attributes: 
    enumerable: affects For-in loop, Object.keys, JSON.stringify, Object.assign
    configurable: means attributes, except value, cannot be changed
    value: holds the value of the property
    writable: controls whether the property can be changed
    get: holds the getter
    set: holds the setter
`);
```