console.log(`
Don’t start a statement (destructurig) with a curly brace, code blocks begin with a curly brace, statements must not begin with one.
{ a, b } = someObject; // SyntaxError
workaround:
({ a, b } = someObject);
`);

const obj = { first: 'Jane', last: 'Doe' };
const {first: f, last: l} = obj;
console.log(`
const {first: f, last: l} = obj results in 2 properties f and l being extracted: f=${f} l=${l}`);
// {prop} is short for {prop: prop}
const {first, last} = obj;
console.log(`
const {first, last} = obj results in 2 properties first and last being extracted: first=${first} last=${last}`);

let [x] = ['a'];
console.log(`
Declaration: let [x] = ['a']; results in: x=${x}`);

console.log(`
Param definition: function fnc([x]) {console.log(x);} if we invoke fnc(['a']), results in 'a' being printed:`);
(function fnc([x]) {console.log(x);})(['a']);


console.log(`
Destructuring in a for..of loop:
const arr = ['a', 'b'];
for (const [index, element] of arr.entries()) \{
    console.log(index, element);
\}
`);
const arr = ['a', 'b'];
for (const [index, element] of arr.entries()) {
    console.log(index, element);
}

console.log(`
Paterns can be used recursively:
const object = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
const { a: [{foo: c}] } = object;
results in const c=123`);
const object = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
const { a: [{foo: c}] } = object;
console.log(c);

console.log(`
Elision lets you use the syntax of Array “holes” to skip elements during destructuring:
const [,, d, e] = ['1', '2', '3', '4'];
`);
const [,, d, e] = ['1', '2', '3', '4']; // d = '3'; e = '4'
console.log(`d=${d} e=${e}`);

console.log(`
With the rest operator:
const [h, ...i] = ['1', '2', '3']; // h='1'; i=['2', '3'

`);
const [h, ...i] = ['1', '2', '3'];
console.log(`h=${h} i=${i}`);



