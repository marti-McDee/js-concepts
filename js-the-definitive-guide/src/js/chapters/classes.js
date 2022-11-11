// CHAPTER 9: CLASSES

/*** Classes and Prototypes ***/

// This is a factory function that returns a new range object.
function range(from, to) {
  // Use Object.create() to create an object that inherits from the
  // prototype object defined below.  The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  let r = Object.create(range.methods);

  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;
  // console.log(new.target)
  // Finally return the new object
  return r;
}

// This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x) { return this.from <= x && x <= this.to; },

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  // Return a string representation of the range
  toString() { return "(" + this.from + "..." + this.to + ")"; }
};

let r1 = range(1,3)


/*** Classes and Constructors ***/

// A Constructor function that initializes new range objects
function Range(from, to) {
  this.from = from
  this.to = to
}

Range.prototype = {
  // Return true if x is in the range, otherwise return false
  includes: function (x) { return this.from <= x && x <= this.to },

  // A generator function that makes instances of the class iterable
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) { yield x }
  },

  // Return a string representation of the range
  toString: function () { return "(" + this.from + "..." + this.to + ")" }
}

// Example uses of this new Range class
let r = new Range(1, 3)
// console.log(
//   r.includes(2),
//   r.toString()
// )
// console.log([...r])


/** Constructors, Class Identity, and instanceof **/
