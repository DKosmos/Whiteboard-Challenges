'use strict';

module.exports = function revLL(ll){
  let arr = [];
  let current = ll;
  while(current !== null){
    arr.push(current.val);
    current = current.next;
  }
  current = ll;
  arr.reverse();
  arr.forEach(val => {
    current.val = val;
    current = current.next;
  });
  return ll;
};