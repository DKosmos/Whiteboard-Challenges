'use strict';

require('jest');
const util = require('../util.js');

describe('Map', () => {
  describe('with VALID usage', () => {
    it('should return a new array with the elements doubled from the original array', done => {
      expect(util.map([2,4,6,8], function(element){
        return parseInt(element) * 2;
      })).toEqual([4,8,12,16]);
      done();
    });
  });
});

describe('Filter', () => {
  describe('with VALID usage', () => {
    it('it should return an array removing even values', done => {
      expect(util.filter([1,2,3,4,5,6], x => x%2 !== 0)).toEqual([1,3,5]);
      done();
    });
  });
});

describe('Reduce', () => {
  describe('with VALID usage', () => {
    it('should sum value of array together', done => {
      expect(util.reduce([1,2,3,4,5], (a, b) => a + b)).toEqual(15);
      done();
    });
  });
});