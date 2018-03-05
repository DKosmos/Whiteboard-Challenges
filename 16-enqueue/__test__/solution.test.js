'use strict';

const enqueue = require('../solution.js');
require('jest');

const queue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  next: 0,
  length: 3,
};

const newQueue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  3: 'kiwi',
  next: 0,
  length: 4,
};

describe('#enqueue', function(){
  it('should return an new queue with added item', () => {
    expect(enqueue(queue, 'kiwi')).toEqual(newQueue);
  });
});