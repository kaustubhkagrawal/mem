# Mem Class for Javascript

This class contains a queue and a worker that will automatically run a pre-initialized function on adding an element in the queue, as well as we can define the number of workers to simultaneously consume the elements in the queue

  <!-- - Type some Markdown on the left
  - See HTML in the right
  - Magic -->

```js
// const Mem = require("./mem");
import Mem from './mem';


/*
  @Params: fn, data, workers
    fn: Function to run in the worker,
    data: initial queue data
    workers: number of workers to use
*/
var a = new Mem(async (a) => {
    return new Promise(async (resolve, reject) => {
        // Do something here
    });
}, null, 10);

```


Adding Elements to the Memory
```js
// adding 3 to the array
a.add(3);
// queue
console.log(a.queue)
// Output: [3]

// Online worker this gives the data on which the worker is currently running
console.log(a.online)

// Offline Worker: this returns the array of the data the worker has completed.
console.log(a.offline);

```
