'use strict';

const Queue = require('../solution.js');

describe('Queue from Stacks', function(){
  beforeEach(() => {
    this.tempQueue = new Queue();
  });

  describe('#enqueue(val)', () => {
    it('should enqueue val', () => {
      let newQueue = this.tempQueue.enqueue(10);
      expect(newQueue.forwardStack.peek().val).toEqual(10);
    });
  });

  describe('#dequeue', () => {
    it('should return the top value', () => {
      let newQueue = this.tempQueue.enqueue(10);
      newQueue = newQueue.enqueue(11);
      newQueue = newQueue.enqueue(12);
      let value = newQueue.dequeue().val;
      expect(value).toEqual(10);
    });
  });
});