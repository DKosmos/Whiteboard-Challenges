'use strict'

function llPal(ll){
  let arr = [];
  let arr2 = [];
  let current = ll.root;

  while(current !== null){
    arr.push(current.data);
    arr2.push(current.data);
    current = current.next;
  };
  
  arr2 = arr2.reverse().toString();
  arr = arr.toString();

  console.log(arr);
  console.log(arr2);
  if(arr === arr2){
    return true;
  } else {
    return false;
  }
};

class LinkNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.root = null;
  }
  prepend(val) {
    let newNode = new LinkNode(val);
    newNode.next = this.root;
    this.root = newNode;
  }
  append(val) {
    let newNode = new LinkNode(val, null);
    let current = this.root;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  find(val) {
    let index = 0;
    let current = this.root;
    while ( current !== null ) {
      if( index === val) {
        return current.data;
      }
      current = current.next;
      index++;
    }
  }
}

let list = new LinkList();
list.prepend(1)
list.append(2)
list.append(3)
list.append(4)
list.append(3)
list.append(2)
list.append(1)
console.log(list);
console.log(llPal(list));