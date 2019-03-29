# Mem Class for Javascript

This class contains a queue and a worker that will automatically run a pre-initialized function on adding an element in the queue, as well as we can define the number of workers to simultaneously consume the elements in the queue

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

```js
// const Mem = require("./mem");
import Mem from './mem';


// new Mem()
var a = new Mem(async (a) => {
    return new Promise(async (resolve, reject) => {
        // Do something here
    });
}, null, 10);

```
