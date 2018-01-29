'use strict';

require('jest');
const Stack = require('../lib/stacks');

describe('stacks', function() {
  beforeEach(() => this.stack = new Stack());


  describe('Push method', () =>{
    it('should have a size of 17', () => {
      [...Array(17)].map((e, i) => this.stack.push(~~(Math.random() * i )));
      expect(this.stack.size).toEqual(17);
    });
    it('should add a new node with value of 1 to the top of the stack', () => {
      this.stack.push(10);
      expect(this.stack.top.val).toEqual(10);
    });
    it('maximum size error if maximum is passed', () => {
      expect(() => {
        [...Array(2049)].map((e, i) => {this.stack.push(~~(Math.random() * i))});
      }).toThrow();
    });

  });
  describe('test pop/peek', () =>{

    it('remove node equal to 1 from top', () => {
      this.stack.push(1);
      expect(this.stack.pop().val).toEqual(1);
    });

    it('should return the value of top', () => {
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });

  });



});