'use strict';

var arrayOne = [3, 5, 27, 31];
var arrayTwo = [3, 5, 27, 31];

function concatSort(arr1, arr2){
  var i = 0;
  var j = 0;
  var result = [];
  var length = arr1.length + arr2.length;
  console.log('length', length);
  for(let k=0; k<length;k++){
    if(!arr1[i] && arr2[j]){
      result.push(arr2[j]);
      j++;
    }
    if(!arr2[j] && arr1[i]){
      result.push(arr1[i]);
      i++;
    }
    if(arr1[i] < arr2[j]){
      result.push(arr1[i]);
      i++;
    }
    if(arr2[j] < arr1[i]){
      result.push(arr2[j]);
      j++;
    }
    if(arr1[i] === arr2[j] && arr1[i] !== undefined && arr2[j] !== undefined){
      result.push(arr1[i]);
      i++;
      result.push(arr2[j]);
      j++;
      k++;
    }
  }
  return result;
}

console.log('result', concatSort(arrayOne, arrayTwo));