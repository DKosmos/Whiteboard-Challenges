'use strict';
const createError = require('http-errors');

module.exports = function removeNode(ll, n){
  let current = ll;
  console.log('ll1', ll);
  let previous = {};
  while(current !== null){
    if(current.val === n){
      previous.next = current.next;
      console.log('ll', ll);
      return ll;
    }
    previous = current;
    current = current.next;
  }
  return createError(400, 'number not found');
}