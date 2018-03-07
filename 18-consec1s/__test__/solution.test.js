'use strict';

const consec1s = require('../solution.js');

require('jest');

const array = [1,1,0,0,1,0,1,1,1,1];

describe('#consec1s', function(){
  it('should return 4', () => {
    expect(consec1s(array)).toEqual(4);
  });
});