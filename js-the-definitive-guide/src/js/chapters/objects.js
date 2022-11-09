// CHAPTER 6: OBJECTS

/*** Creating Objects ***/

/** Object Literals **/
let empty = {}
let point = {x: 1, y: 0}
let p2 = {x: point.x, y: point.y + 1}

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
console.log(p2.hasOwnProperty('z'))