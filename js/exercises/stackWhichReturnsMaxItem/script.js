function Stack() {
    this.items = [];
}

Stack.prototype.push = function(item) {
    this.items.push(item);
};

Stack.prototype.pop = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

/* 
 You can try implementing it as another ordered array, 
 but popping would have an n complexity, cause you need to remove the 
 appropriate item, instead, keep and array of max for each position!! 
*/

function MaxStack() {
	Stack.call(this);
	this.maxStack = [];
}

MaxStack.prototype = Object.create(Stack.prototype);
MaxStack.prototype.constructor = MaxStack;

MaxStack.prototype.push = function(item) {
	if (this.maxStack.length === 0 || this.maxStack[this.maxStack.length - 1] < item) {
  	this.maxStack.push(item);
  } else {
      this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
  }
  Stack.prototype.push.call(this, item);
};

MaxStack.prototype.pop = function() {
	if (this.maxStack.length) {
    this.maxStack.pop();
  }
	return Stack.prototype.pop.call(this);
};

MaxStack.prototype.getMax = function() {
	return this.maxStack.length ? this.maxStack[this.maxStack.length - 1] : null;
};

/* because it has another name we can call the super function directly, 
without having to use Stack.prototype.peek.call() */
MaxStack.prototype.myPeek = function() {
	return this.peek();
}


let maxStack = new MaxStack();
console.log(maxStack.pop());
console.log(maxStack.getMax());

maxStack.push(3);
console.log(maxStack.getMax());

maxStack.push(1);
console.log(maxStack.getMax());

maxStack.push(5);
console.log(maxStack.getMax());

maxStack.pop();
console.log(maxStack.getMax());

console.log(maxStack.myPeek());
