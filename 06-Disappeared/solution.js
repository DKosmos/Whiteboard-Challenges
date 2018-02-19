'use strict';

var solution = function(arr){
  let results = [];
  let highest = Math.max.apply(null, arr);
  for(let i=1; i < highest; i++){
    if(!arr.includes(i)){
      results.push(i);
    }
  }
  return results;
}

console.log(solution([2, 4, 6]));