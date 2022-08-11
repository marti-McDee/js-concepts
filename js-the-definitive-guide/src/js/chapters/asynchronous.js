/**  Chapter 13: Asynchronous JavaScript  **/

const log = console.log
const error = console.error
const warn = console.warn
const clear = console.clear

const time = console.time
const timeEnd = console.timeEnd

const table = console.table
const count = console.count

const group = console.group
const groupEnd = console.groupEnd

const assert = console.assert

/* Asynchronous Programming with Callbacks */



/* Promises */

const catFacts = fetch('https://cat-fact.herokuapp.com/facts')

const event = new Promise((resolve, reject) => {
  if(catFacts.ok) {
    resolve(catFacts)
  }
  else {
    reject("Cat facts not found")
  }
})

event.
then((facts) => {
  log(facts)
})
.catch((err) => {
  log(err)
})



/* Async/Await */




/* Asynchronous Iteration */