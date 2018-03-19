'use strict';

module.exports = exports = {};

exports.map = function(arr, callback){
  let result = [];
  for(let element of arr){
    result.push(callback(element));
  }
  return result;
}

exports.filter = function(arr, callback){
  let result = [];
  for(let element of arr){
    if(callback(element)){
      result.push(element);
    }
  }
  return result;
}

exports.reduce = function(arr, callback, initialState){
  if(initialState === undefined){
    var result = arr[0];
    var i = 1;
  } else {
    var result = initialState;
    var i = 0;
  }

  for(i; i<arr.length; i++){
    result = callback(result, arr[i]);
  }
  return result;
}