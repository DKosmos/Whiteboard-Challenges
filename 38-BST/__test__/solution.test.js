'use strict';

const bstTraverse = require('../solution.js');

const testBST = {
  val: 10,
  left: {
    val: 4,
    left: {
      val: 1
    },
    right: {
      val: 6
    }
  },
  right: {
    val: 15,
    left: {
      val: 13
    },
    right: {
      val: 20
    }
  }
}

describe('BST PreOrder Test', () => {
  it('should return a PreOrder array', () => {
    let ans = bstTraverse(testBST);
    expect(ans).toEqual([10, 4, 1, 6, 15, 13, 20]);
  })
})