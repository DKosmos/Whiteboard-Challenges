'use strict'

const qwerty = require('../solution.js');

require('jest');

const array = ['sup', 'dad', 'tree', 'snake', 'pet'];

describe('qwerty', () => {
  it('should return an array containing only words spellable in a single line of the keyboard', done => {
    expect(qwerty(array)).toEqual(['dad', 'tree', 'pet']);
    done();
  })
});