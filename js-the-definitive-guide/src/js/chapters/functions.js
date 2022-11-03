// Chapter 8: Functions

"use strict"

/* Function Declarations */

// print the name and value of each property of o. Return undefined
function printProps(o) {
  for (p in o) {
    // console.log(`${p}: ${o[p]}\n`)
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
  // console.log(candy); // undefined
  if (true) {
    var candy = function () {
      // console.log(9);
    }
    candy();
  }

  // console.log(candy);
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

// console.log(highOnPotenuse(3, 4))


/** Invoking Functions **/

/* Function Invocation */
const sum1 = (x, y) => {
}

const x1 = 4, x2 = 5, y1 = 7, y2 = 3
// console.log(sum1?.(x1 + x2, y1 + y2))

const strict = (function () { return !this }())
// console.log(`strict mode: ${strict}`)


/* Method Invocation */
const calculator = {
  operand1: 1,
  operand2: 2,
  add() {
    this.result = this.operand1 + this.operand2
  }
}

calculator.add()
// console.log(calculator.result)

calculator.operand1 = 15
calculator.add()
// console.log(typeof calculator.result.toString().toUpperCase())
// console.log(typeof calculator.result)

// 'this' value of f() method is the global object or undefined
let o = {
  m: function () {
    let self = this
    this === o // => "true"
    return f()

    function f() {
      this === o // "false": 'this' is global or undefined
      self === 0 // "true": self is the outer 'this' value
      return this
    }
  }
}

// console.log(o.m())

// 'this' value of f() method is the value of 'this' outside the object
// the inheritance goes all the way down
let obj4 = {
  m: function () {
    let self = this
    // console.log(this === obj4)  // true 

    const f = () => {
      // console.log(this === obj4)  // true

      const g = () => {
        // console.log(this === obj4)  // true

        const h = () => {
          // console.log(this === obj4)  // true
        }
        h()
      }
      g()
    }
    // function implicity invoked on this object
    const bound = (function () {
      // console.log(`bound func: ${obj4 === this}`)
    }).bind(this)

    f()
    bound()
  }
}

obj4.m()


/* Constructor Invocation */

// you can omit pair of empty parenthesis in constructor invocations
const obj5 = new Object() // a new global variable is created if keyword not specified (in non-strict mode)
const obj6 = new Object  // strict mode requires a declaration with let, const, or var


/* Implicit Function Invocation */
const person = {
  name: 'David',
  getName: function () {
    // console.log(this)

    ; (() => {
      // console.log('inner func', this)
    })()

  }
}

const personName = person.getName
personName()

const highlight = (strings, ...values) => {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (values[i] || '')
  });

  return str
}

const noun = 'breath'
const noun2 = 'cat food'
const sentence = highlight`My cat's ${noun} smells like ${noun2}.`
// console.log(sentence)


/** Function Arguments and Parameters **/

/* Optional Parameters and Defaults */

// When a function is invoked with fewer args than declared params, the additional params are set to their
// default values ('undefined' - unless otherwise specified)

function getPropertyNames(o, a) {
  a = a || []
  for (let property in o) a.push(property)
  return a
}

let obj7 = { x: 1 }, p = { y: 2, z: 3 }
let a = getPropertyNames(obj7)
// console.log(getPropertyNames(p, a))

// for functions with multiple params, you can use the value of a previous param to define the default value
// of params that follow it
const rectangle = (width, height = width * 2) => ({ width, height })
// console.log(rectangle(3))


/* Rest Parameters and Variable Length Arguments */
function max(first = -Infinity, ...rest) {
  let maxValue = first  // start by assuming the first arg is the largest

  for (let n of rest) {
    if (n > maxValue) maxValue = n
  }

  return maxValue
}

// console.log(max(1, 10, 20, 350, 9, 37, 351, 5))

/* The Arguments Object */

// used before es6, in place of the ...rest param
function max(x) {
  let maxValue = -Infinity

  // loop through the args, looking for, and storing the largest
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i]
  }

  return maxValue
}

console.log(max(1, 10, 20, 350, 9, 37, 351, 5))