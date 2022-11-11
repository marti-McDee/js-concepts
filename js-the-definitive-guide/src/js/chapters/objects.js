// CHAPTER 6: OBJECTS

/*** Creating Objects ***/

/** Object Literals **/
let empty = {}
let point = { x: 1, y: 0 }
let p2 = { x: point.x, y: point.y + 1 }

// when property names include hyphens and spaces, use quotes
let book = {
  "main-title": "JavaScript",
  "sub-title": "the Definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    lastname: "Flanagan"
  }
}


/** Prototypes **/
// console.log(p2.hasOwnProperty('z'))


/** Object.create() **/

// Object.create() creates a new object using its first argument as the prototype of that object:
let o1 = Object.create({ x: 1, y: 2 })
console.log(o1.x + o1.y)
console.log(o1)

// the example below inherits no props or methods (not even basic methods, like toString())
let o2 = Object.create(null)
console.log(o2)

// creates an ordinary empty object
let o3 = Object.create(Object.prototype)
console.log(o3)