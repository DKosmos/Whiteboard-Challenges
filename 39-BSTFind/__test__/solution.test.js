'use strict';

const bstFind = require('../solution.js');

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

describe('BST Find Test', () => {
  it('should return true because the find value exists', () => {
    let ans = bstFind(testBST, 1);
    expect(ans).toEqual(true);
  });
  it('should return false because the find value doesnt exist', () => {
    let ans = bstFind(testBST, 2);
    expect(ans).toEqual(false);
  });
});