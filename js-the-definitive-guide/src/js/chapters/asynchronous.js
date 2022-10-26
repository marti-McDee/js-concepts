// Chapter 13: Asynchronous JavaScript

/* Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests
 without blocking the main thread. */

/** 13.1 Asynchronous Programming with Callbacks **/

/* Timers */

// display name in the console after 4 seconds
setTimeout(
  firstName => {
    // console.log(`My name is ${firstName}`)
  },
  4000,
  'David'
)

// this time name is displayed every second and the function is passed as a reference
function displayName(firstName) {
  // console.log(`My name is ${firstName}`)
}

// setInterval(displayName, 1000, 'David')

// console.log a countdown from 10, with a space of 1 second between each number.
function countDown(start, end) {
  const timer = setInterval(() => {
    // console.log(start--)
    if (start < end) {
      clearInterval(timer)
    }
  }, 1000)
}

countDown(10, 0)

function first() {
  // console.log('first');
}
function second() {
  // console.log('second');
}
function third() {
  // console.log('third');
}
first()
setTimeout(second, 1000) // Invoke `second` after 1000ms
third()
// Output:
// first
// third
// second

/* Events */
let okay = document.getElementById('confirm')
const p = document.getElementById('my-paragraph')
okay.addEventListener('pointerdown', function () {
  // console.log(this.innerHTML)
})

/* Network Events */
const request = new XMLHttpRequest()

// send GET request to test API
const getText = function (
  callback // How can I use this callback?
) {
  var request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.responseText) // Another callback here
    }
  }
  const id = Math.floor(Math.random() * 5 + 1)
  request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`)
  request.send()
}

function cb(data) {
  p.innerText = data
}

const inner = document.getElementById('inner-box')
inner.addEventListener('pointerover', _ => getText(cb))

/* Callbacks and Events in Node */
