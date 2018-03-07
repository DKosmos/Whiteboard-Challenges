'use strict';

module.exports = function consec1s(arr){
  let largest = 0;
  let current = 0;
  arr.forEach( num => {
    if(num === 1){
      current++;
      if(current > largest){
        largest = current;
      }
    } else if(current > largest){
      largest = current;
      current = 0;
    } else {
      current = 0;
    }
  });

  return largest;
}