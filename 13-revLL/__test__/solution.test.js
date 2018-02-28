'use strict';

const revLL = require('../solution.js');
require('jest');

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

describe('#revLL', function(){
  it('should return a reversed linked list', done => {
    let list = revLL(ll);
    expect(list.val).toEqual(4);
    expect(list.next.val).toEqual(3);
    expect(list.next.next.val).toEqual(2);
    expect(list.next.next.next.val).toEqual(1);
    done();
  });
});