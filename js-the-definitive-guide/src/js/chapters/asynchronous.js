/***  Chapter 13: Asynchronous JavaScript  ***/

// Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests 
// without blocking the main thread.



/** 13.1 Asynchronous Programming with Callbacks **/
const loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      cb(data)
    })
}

loadPokemon(56, (pokemon) => {
  // console.log(pokemon)
})


/* Timers */

// display name in the console after 4 seconds
setTimeout((firstName) => {
  // console.log(`My name is ${firstName}`)
}, 4000, 'David')

// this time name is displayed every second and the function is passed as a reference
function displayName(firstName) {
  // console.log(`My name is ${firstName}`)
}

// setInterval(displayName, 1000, 'David')

// console.log a countdown from 10, with a space of 1 second between each number.
function countDown(start, end) {
  const timer = setInterval(() => {
    // console.log(start--)
    if (start < end) { clearInterval(timer) }
  }, 1000)
}

countDown(10, 0)


/* Events */
const outer = document.querySelector('.outer')
const inner = document.querySelector('.inner')



/* Network Events */


/* Callbacks and Events in Node */