// practiced defining functions; invoking functions; function args and params; functions as values; functions as namespaces; closures; function properties, methods, and constructor; functional programming; 

"use strict"

/* Function Declarations */

// print the name and value of each property of o. Return undefined
function printProps(o) {
  for (p in o) {
    console.log(`${p}: ${o[p]}\n`)
  }
}

const myObject = {
  name: 'David',
  title: 'l33tc0d3r',
  sex: 'yes, please :)'
}

// printProps(myObject)



var factorial = function f(x) {
  if (x <= 1) return 1
  return x * f(x - 1)
}

// console.log(factorial(4))

// console.log(y)

var y = 40

// defining function within block scope
function Foo() {
  console.log(candy); // undefined
  if (true) {
    var candy = function () {
      console.log(9);
    }
    candy();
  }

  console.log(candy);
  candy();
}

// Foo()


/* Function Expressions */
const square = function (x) {
  return x * x
}

let tenSquared = (function (x) { return x * x }(10))
// console.log(tenSquared)


/* Arrow Functions */
const sum = (x, y) => (x + y)
// console.log(sum(10, 12))

const constantFunc = _ => (33)
// console.log(constantFunc())

// make a copy of array with null elements removed
const arr = [1, null, 2, 3]

let filtered = arr.filter(x => x !== null)
// console.log(`filtered array: ${filtered}`)

let squares = filtered.map(x => x * x)
// console.log(`squared elems: ${squares}`)

/* Arrow functions do not have a prototype property, which means that they cannot be used as constructor functions for
 new classes */


/* Nested Functions */
function highOnPotenuse(a, b) {
  function square(x) { return x * x }
  return Math.sqrt(square(a) + square(b))
}

console.log(highOnPotenuse(3, 4))