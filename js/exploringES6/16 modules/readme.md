# Modules

** ES6 is the first time that JavaScript has built-in modules. There is exactly one module per file and one file per module**

```
console.log(`
Each module is a piece of code that is executed once it is loaded.
Imports are hoisted.
Imports are read-only views on exports, that is why cyclic dependencies work.
Declarations (variables, functions) by default stay local to the module, unless exported.
Modules are singletons. You can import the same module several time, but only one instance will exist.
There are 2 kids of exports: named (several per module) and default (one per module). Best practice not to mix them!
You cannot conditionally import/export things. Import exports have to be at the top level.
`);

console.log(`
There can be multiple named exports/imports:
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import sqrt from 'lib'; //Default import
import { square as squareFnc, diag } from 'lib'; // You can rename named imports
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

You can also import the complete module:

//------ main.js ------
import * as lib from 'lib'; // namespace import, imports the module as an object (with one property per named export)
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
`);

console.log(`
There can be a single default export per module
//------ myFunc.js ------
export default function () { ··· } // no semicolon!

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();
Or a class:

//------ MyClass.js ------
export default class MyClass { ··· } // no semicolon!

//------ main2.js ------
import MyClass from 'MyClass';
const inst = new MyClass();
`);

console.log(`
There are 2 ways in which exports can be done. One you can mark declarations with the keyword export:

export var myVar1 = ···;
export function myFunc() {}
export function* myGeneratorFunc() {}
export class MyClass {}

The second way is to list everything we want to export at the end of the file:
const MY_CONST = ···;
function myFunc() {}

export {MY_CONST, myFunc};

Or you can also export things under different names:

export { MY_CONST as FOO, myFunc };
`);

```
