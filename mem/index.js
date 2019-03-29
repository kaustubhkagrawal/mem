class Mem {
  constructor(fn, record = null, max = 5) {
    // Queue
    // console.log(record);

    this.online = [];
    this.offline = [];
    this.max = max;
    this.workerDef(fn);

    if (record === null) {
      this.queue = [];
    } else if (record.length > 0) {
      this.queue = record;
      this.worker();
    } else if (record) {
      this.queue = [];
      this.add(record);
    }

  }


  workerDef(fn) {
    Mem.prototype.worker = function() {
      var online = this.online.length;
      var count = this.max - online;

      var spliced = this.queue.splice(0, count);
      spliced.map((a) => {
        this.online.push(a);
        console.log("Worker started the job for", a);
        var promise = new Promise(async (resolve, reject) => {
          var index = this.online.indexOf(a);

          fn(a, this.queue, this.online, this.offline).then((res) => {
            var offline = this.online.splice(index, 1);
            this.offline.push(a);
            resolve();
          })
        });
        promise.then((res) => {
          console.log('worker completed the job for', a);
          if (this.queue.length > 0) {
            this.worker();
          }
        });
      })
    }
  }


  add(record) {
    this.queue.push(record);
    if (this.online.length < this.max) {
      this.worker();
    }
  }

  remove() {
    return this.queue.pop();
  }

  head() {

    return this.queue.slice(0, this.max);
  }


}

module.exports = Mem;
