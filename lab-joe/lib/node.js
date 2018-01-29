'use strict';

module.exports = class {
  constructor(val) {
    if(!val) return new Error('no value');
    this.val = val;
    this.next = null;

  }

};