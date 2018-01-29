'use strict';



module.exports = class {

  constructor() {
    this.oldest = 1;
    this.newest = 1;
    this.storage = {};
  }

  enqueue(val) {
    this.storage[this.newest] = val;
    this.newest++;
    return `Value ${val}`;
  }

  dequeue() {
    let oldest = this.oldest;
    let newest = this.newest;
    let temp;
    if(oldest !== newest){
      temp = this.storage[oldest];
      delete this.storage[oldest];
      this.oldest++;
      return temp;
    }

  }

  size() {
    return this.newest - this.oldest;
  }


};