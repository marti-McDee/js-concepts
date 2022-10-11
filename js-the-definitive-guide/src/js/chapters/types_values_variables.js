/***  Chapter 3: Types, Values, and Variables ***/
const exp = []

/** Overview and Definitions **/

/* Map object */
let zoo = new Map()

zoo.set('Zebras', 5)
zoo.set('Gorillas', 2)
zoo.set('Monkeys', 75)

let zebraCount = zoo.get('Zebras')

for (let [key, value] of zoo) {
  // console.log(`${key} : ${value}`)
}

/** Numbers **/

/* Primitive coercion to object */
let num = 5
let temp = new Number(num)
// console.log(typeof temp.toString())
temp = {}
num = '5'

/* Arithmetic in JavaScript */
const exponent = Math.pow(2, 3)
const round = Math.round(0.6)
const ceil = Math.ceil(0.6)
const floor = Math.floor(0.6)
const trunc = Math.trunc(0.6987897)
const abs = Math.abs(-5)
const max = Math.max(4, 5, 12, 3, 1)
const min = Math.min(4, 5, 12, 3, 1)
const rand = () => Math.floor(Math.random() * 100 + 1)
const pi = Math.PI
const e = Math.E
const sqrt = Math.sqrt(3)
const cubert = Math.cbrt(27)
const fourthRoot = Math.pow(81, 1 / 4)
const log = Math.log(10) // natural log of 10
const log10 = Math.log10(100) // base 10 log of 100
const Ecubed = Math.exp(3)

let ans = 0

isNaN(undefined) // true
isNaN({}) // true
isNaN(Infinity) // false
isNaN(NaN) // true
isNaN(0) // false

ans = 0
Number.isNaN(undefined) // false
Number.isNaN({}) // false
Number.isNaN(Infinity) // false
Number.isNaN(NaN) // true
Number.isNaN(0) // false

function checkIsNaN(arr) {
  for (x in arr) {
    // console.info(arr[x] !== arr[x])
  }
}

checkIsNaN([undefined, {}, Infinity, NaN, 0])

/* Binary Floating-Point and Rounding Errors */
const float = 0.1 + 0.2
const float2 = 1 / 10

/* Arbitrary Precision Integers with BigInt */
let bigMath = 1000000000000000n * 1000000000000n // 10^27

let bigInt = BigInt(Number.MAX_SAFE_INTEGER)

let str = '1' + '0'.repeat(100)
str = BigInt(str)

// comparison operators allow for mixed operad types
// console.log(1 < 2n, 2 > 1n, 0 == 0n, 0 === 0n)

// none of the Math functions accept BigInt operands

/* Dates and Times */
let timestamp = Date.now() // current time as the number of seconds that have passed since the Unix Epoch (Jan 1 1970)
// console.log(timestamp)
let now = new Date()
// console.log(now)
let ms = now.getTime()
// console.log(ms)
let iso = now.toISOString()
// console.log(iso)

/** Text **/

/* String Literals */
const me = {
  first: 'Big',
  last: 'Bird',
  age: '52',
  address: '123 Sesame Street'
}

// console.log(`${me.first} ${me.last} is ${me.age} years old and lives at ${me.address}`)

const literal = `This is a very, very, very, very, very, very, very, very, very, very, \
very, very, very, very, very, very, very, very, very, very, very, very, very, very,
very, very, very, very, very long string literal \u{1f35c}`
// console.log(literal)

/* Escape Sequences in String Literals */
for (let i = 0; i < 7; i++) {
  // console.log(`${i + 1}. Walkthrough of the for-loop\r`) // carriage return yields same result as newline
}
for (let i = 0; i < 7; i++) {
  // console.log(`${i + 1}. Walkthrough of the for-loop\n`)
}

/* Working with Strings */
let s = 'Hello, world!'
// console.log(s.substring(1, 4), s.slice(7, -1), s.slice(-6), s.split(', '))

// Searching a String
// console.log(
//   s.lastIndexOf('l'),
//   s.lastIndexOf('z')
// )

// Boolean Searching Functions
// console.log(
//   s.startsWith('Hell'),
//   s.endsWith('!'),
//   s.includes('old')
// )

// Creating Modified Versions of a String
exp.push(
  s.replace('o,', ''),
  s.toUpperCase(),
)

for(let i in exp) {
  // console.log(exp[i])
}

// Inspecting Individual 16-bit Characters of a String
// console.log(
//   s.charAt(0),
//   s.charAt(s.length-1),
//   s.charCodeAt(s.length-1),
//   s.codePointAt(0)
// )

// String Padding Functions
// console.log(
//   s.padEnd(14, '-'),
//   s.padStart(14)
// )

// Space trimming functions
// console.log(
//   " test ".trim(),
//   " test".trimStart()
// )

// Misc String Methods
console.log(
  s.concat('?'),
  s.concat('! ').repeat(3)
)


/* Template Literals */
console.log(
  String.raw`\n`,
)


/* Pattern Matching */
let text = "testing: 1,2,3"
let pattern = /\d+/g
console.log(pattern.test(text))

// position of first match
console.log(
  text.search(pattern)
)

// array of all matches
console.log(
  text.match(pattern)
)

console.log(
  text.replace(pattern, '#')
)

console.log(
  text.split(/\D+/) // split on nondigits
)


/** Boolean Values **/

/* 
The following values convert to falsy:

undefined
null
0
-0
NaN
""
*/

console.log(`${3 === 4}`.toString())



/** Null and Undefined **/
console.log(null == undefined)


/** Symbols **/
// unique identifiers, immutable
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id1 === id2)
// alert(id1.toString())

let user = {
  name: 'John',
  [id1]: 124,
  wearsGlasses: true
}

for (let key in user){
  console.log(key)
}

let score = Symbol.for('score')
let score2 = Symbol.for('score')

console.log(score == score2)

let sym1 = Symbol.for('name')
let sym2 = Symbol.for('number')

console.log(Symbol.keyFor(sym1))
console.log(Symbol.keyFor(sym2))

let strname = 'string name'
let symname = Symbol('propname')

console.log(
  typeof strname, typeof symname
)

let o = {}
o[strname] = 1
o[symname] = 2

console.log(
  o[strname],
  o[symname],
)


let sym = Symbol.for('shared')
let t = Symbol.for('shared')

console.log(
  sym === t,
  sym.toString(),
  Symbol.keyFor(t)
)

let myUniqueSymbol = Symbol("Rubber Ducky")
console.log(myUniqueSymbol.description)

let myFirstSymbol = Symbol()
console.log(myFirstSymbol.description)

// Symbols will not implicitly convert to a String
let mySecondSymbol = Symbol.for('My unique symbol')
console.log(Symbol.keyFor(mySecondSymbol))
try {
  let myThirdSymbol = Symbol.for("My unique symbol")
  console.log(`Symbol: ${mySecondSymbol.toString()}`)
} catch(e) {
  console.log(e)
}

try {
  alert(mySecondSymbol) 
} catch(e) {
  console.log(`The following error occured: \n${e}`)
}
// alert(mySecondSymbol.description.toString())


/** The Global Object **/
