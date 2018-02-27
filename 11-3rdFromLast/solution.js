'use strict';

function findN(ll, n){
  let current = ll.root;
  let lastN = [];

  while(current !== null){
    if(lastN.length < n){
      lastN.push(current);
    }

    if(lastN.length === n){
      lastN.shift();
      lastN.push(current);
    }

    current = current.next;
  }

  return lastN[0];
}
