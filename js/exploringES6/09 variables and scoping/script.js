console.log(`
The following functions would throw an error, because tmp is not defined after ifs' block scope has ended.
const order = () => {
    if (true) {
        let tmp = x;
    }
    console.log(tmp===x); // ReferenceError: tmp is not defined
};
`);

console.log(`
let variables are mutable
let foo = 'abc';
foo = 'def';
console.log(foo); // def
`);

console.log(`
const variables are immutable, but be careful, for objects, the reference is immutable, not the object's properties
const foo = 'abc';
foo = 'def'; // TypeError
`);

console.log(`
A variable declared by let or const has a so-called temporal dead zone (TDZ): 
When entering its scope, it can’t be accessed (got or set) until execution reaches the declaration. 
Let’s compare the life cycles of var-declared variables (which don’t have TDZs) and let-declared variables (which have TDZs).

That is: const, and let are still hoisted, but left uninitialized! Unlike var, which is initialized to 'undefined'.

let tmp = true;
if (true) { // enter new scope, TDZ starts
    // Uninitialized binding for 'tmp' is created
    console.log(tmp); // ReferenceError
    
    let tmp; // TDZ ends, 'tmp' is initialized with 'undefined'
}
`);

console.log(`
var-declaring a variable in the head of a for loop creates a single binding (storage space) for that variable:
const varDeclaringInForLoopCreatesOneBinding = () => {
    const arr = [];
    for (var i=0; i < 3; i++) {
        arr.push(() => i);
    }
    return arr.map(x => x()); /// 333
};
`);

const varDeclaringInForLoopCreatesOneBinding = () => {
    const arr = [];
    for (var i=0; i < 3; i++) {
        arr.push(() => i);
    }
    return arr.map(x => x());
};
console.log(JSON.stringify(varDeclaringInForLoopCreatesOneBinding()));

console.log(`
let-declaring and const-declaring a variable, creates a new binding for each loop iteration. Careful, you cannot change the initial value.
const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
`);

const letDeclaringInForLoopCreatesOneBindingPerIteration = () => {
    const arr = [];
    for (let i=0; i < 3; i++) {
        arr.push(() => i);
    }
    return arr.map(x => x());
};
console.log(JSON.stringify(letDeclaringInForLoopCreatesOneBindingPerIteration()));


console.log(`
You can use 'const' with for..of and for..in loops because, you get one imutable const per iteration, and the initial values does not change
const arr = [];
for (const i of [0, 1, 2]) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
`);

const constDeclaringInForLoopCreatesOneBindingPerIteration = () => {
    const arr = [];
    for (const i of [0, 1, 2]) {
        arr.push(() => i);
    }
    return arr.map(x => x());
};
console.log(JSON.stringify(constDeclaringInForLoopCreatesOneBindingPerIteration()));