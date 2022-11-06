// Chapter 13: Asynchronous JavaScript

/* Using asynchronous JavaScript (such as cbs, promises, and async/await), you can perform long network requests
 without blocking the main thread. */

/** 13.1 Asynchronous Programming with cbs **/

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
// let okay = document.getElementById('confirm')
// const p = document.getElementById('my-paragraph')
// okay.addEventListener('pointerdown', function () {
//   // console.log(this.innerHTML)
// })

/* Network Events */
// const request = new XMLHttpRequest()

// send GET request to test API
// const getText = function (
//   cb // How can I use this cb?
// ) {
//   var request = new XMLHttpRequest()
//   request.onreadystatechange = function () {
//     if (request.readyState == 4 && request.status == 200) {
//       cb(request.responseText) // Another cb here
//     }
//   }
//   const id = Math.floor(Math.random() * 5 + 1)
//   request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`)
//   request.send()
// }

function cb(data) {
  p.innerText = data
}

// const inner = document.getElementById('inner-box')
// inner.addEventListener('pointerover', _ => getText(cb))

/* cbs and Events in Node */
const fs = require('fs')
const { request } = require('http')
let options = {
  // default options should go here
}

// Read a config file, then call the cb function
fs.readFile("../helper/config.json", "utf-8", (err, text) => {
  if(err){
    // display a warning, but continue
    console.warn("Could not read config file: ", err)
  } else {
    // parse the file contents and assign to the options object
    Object.assign(options, JSON.parse(text))
  }

  // start running the program
  // startProgram(options)
})

// make an http request for the contents of a URL in node
// Node uses an on() method to register event listeners, insted of addEventListener()
const https = require("https")

// Read the text content of the URL and asynchronously pass it to the cb
function getText(url, cb){
  // Start an http GET request for the URL
  request = https.get(url)

  // Register a function to handle the "response" event
  request.on("response", response => {
    // the response event means that the response headers have been received
    let httpStatus = response.statusCode

    // The body of the http response has not been received yet.
    // So, we register more event handlers to be called when it arrives
    response.setEncoding("utf-8")
    let body = ""

    // This event handler is called when a chunk of the body is ready
    response.on("data", chunk => { body += chunk })

    // This event handler is called when the response is complete
    response.on("end", () => {
      if(httpStatus === 200) cb(null, body)
      else cb(httpStatus, null)
    })
  })

  // We also register an event handler for the lower-level network errors
  request.on("error", (err) => cb(err, null))
}