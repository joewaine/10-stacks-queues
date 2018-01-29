
'use strict';

const Queue = require('../lib/queues');
require ('jest');


describe('queues', function() {

  beforeEach(() => this.queue = new Queue());


  describe('test defaults come out correct', () =>{

    it('should create a new instance of a stack', () =>{
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default value of 1 assigned to the oldest', () =>{
      expect(this.queue.oldest).toBe(1);
    });
    it('should have a default val 0 assigned to the size property', () => {
      expect(this.queue.size()).toEqual(0);
    });

  });

  describe('enqueue', () =>{

    it('create a new placeholder in queue', () =>{
      expect(this.queue.enqueue(1)).toBe('Value 1');
    });
    it('return queue size of 1', () =>{
      this.queue.enqueue(1);
      expect(this.queue.size()).toEqual(1);
    });
    it('should have a newest index value of 2', () => {
      this.queue.enqueue(1);
      expect(this.queue.newest).toEqual(2);
    });

  });
  describe('dequeue', () =>{

    it('remove placeholder from queue', () =>{
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(25);
      expect(this.queue.dequeue()).toEqual(1);
      expect(this.queue.size()).toEqual(2);


    });
  });

  describe('queue size', () =>{
    it('check front/oldest item in queue is 5', () =>{
      this.queue.enqueue(5);
      this.queue.enqueue(3);
      this.queue.enqueue(7);
      expect(this.queue.oldest).toEqual(1);

    });
    it('check the back/first/newest item in the queue is four', () =>{
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(4);
      expect(this.queue.newest).toEqual(4);

    });
  });


});