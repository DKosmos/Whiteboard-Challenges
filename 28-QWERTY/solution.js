'use strict';

module.exports = function qwerty(arr){
  let result = [];
  let lineOne = /^[qwertyuiop]*$/ig;
  let lineTwo = /^[asdfghjkl]*$/ig;
  let lineThree = /^[zxcvbnm]*$/ig;
  arr.forEach(el => {
    if(lineOne.test(el) || lineTwo.test(el) || lineThree.test(el)){
      result.push(el);
    }
  });
  return result;
}