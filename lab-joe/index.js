'use strict';

const createStack = require('./lib/stacks');
const createQueue = require('./lib/queues');


// creat the queue and stack instances
let sueue = new createQueue();
let stack = new createStack();


// add a value to the stack and log the peek
stack.push(17);
console.log(stack.peek());


// add a value to the queue and then dequeue
queue.enqueue(17);
console.log(queue.dequeue());