console.log(`
ES6 has support for default parameters:
function func(x, y=0) {
    return [x, y];
};
func(1);    //[1,0]
func(1,2);  //[1,2]
`);

console.log(`
ES6 has support for REST parameters:
function format(pattern, ...params) { // This means we don't need to use arguments anymore
    return {pattern, params};
}
format(1, 2, 3); // pattern = 1, params = [2, 3]
format(); // pattern = undefined, params = []
`);

console.log(`
ES6 has support for SPREAD operator:
Math.max(...[-1, 5, 11, 3]); // We can avoid apply Math.max.apply(this, [-1, 5, 11, 3]);
[...arr1, ...arr2] // We can avoid ['a', ['b']].concat(['c', 'd'])
`);

console.log(`
destructuring the objects in an Array.
const items = [
    { word:'foo', count:3 },
    { word:'bar', count:9 },
];
items.forEach(({word, count}) => {
    console.log(word+' '+count);
});


`);