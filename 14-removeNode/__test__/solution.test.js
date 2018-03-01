'use strict';

const removeNode = require('../solution.js');

require('jest');

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

describe('#removeNode', function(){
  describe('with valid number', function(){
    it('should return linked list with first node containing value of n removed', done => {
      let ans = removeNode(ll, 3);
      expect(ans.val).toEqual(1);
      expect(ans.next.val).toEqual(2);
      expect(ans.next.next.val).toEqual(4);
      done();
    });
  });
});