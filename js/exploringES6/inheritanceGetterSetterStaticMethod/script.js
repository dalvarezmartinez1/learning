function Point(x, y) {
  this.x = x; // public property
	
  this.toString = function() { // public property, although it would be better to declare it on the prototype. This is inherited as well, even if not on the prototype.
    return toStringDelegate();
  };
	
	const toStringDelegate = function() { // private function
		return `x=${x} y=${y}`;
	}
  
  Object.defineProperty(this, 'y', { //defining a getter. Setters can be defined too, but in that case is better to define it on this, as x is
    	get: function() {
        return y;
    	}
  });
}

Point.prototype.plus = function(p) { // Best way of creating public methods, they don't get replicated on every object. This is inherited
  	return new Point(p.x + this.x, p.y + this.y); 
};

Point.pointStaticMethod = function() { //This is not inherited, and is not on any Point object or ColoredPoint object. It's static
	console.log('Point static method');
}

function ColoredPoint(x, y, color) {
	Point.call(this, x, y); // Calling the super constructor
	this.color = color; //Assigning any own properties
}

ColoredPoint.prototype = Object.create(Point.prototype);
ColoredPoint.prototype.constructor = ColoredPoint;

ColoredPoint.prototype.publicMethodAGetter = function() { // Returns a parent property
	return this.x;
}

debugger;
let first = new ColoredPoint(1,1, 'red');
console.log(`The initial values are: ${first.toString()}`);
first.y = 10; // This is read only, so it should not be modifiable
console.log(`Changing a readonly value has no effect: ${first.toString()}`);
console.log(`ColoredPoint.prototype.publicMethodAGetter is able to return parent values ${first.publicMethodAGetter()}`);
console.log(`Point.pointStaticMethod is not inherited? ${first.pointStaticMethod === undefined}`);

console.log(`Current point state: ${first.toString()}`);
console.log(`Calling the inerited method Point.prototype.plus, with arguments '2, 2, red' ${first.plus(new ColoredPoint(2,2, 'blue')).toString()}`);