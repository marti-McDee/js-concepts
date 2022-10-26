/* 
* Web worker threads have a different global object than the Window with which they are associated. code in a woker can 
* refer to its global object as 'self'.
* 
* ES2020 defines 'globalThis' as the standard way to refer to the global object in any context.
*/

globalThis.onmessage = function (message) {
  let sum = 0
  for (let i = 0; i < 10000000000; i++) {
    sum += i
  }

  postMessage(sum)
}