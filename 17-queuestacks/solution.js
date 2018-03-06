'use strict';

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(val){
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop(){
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp;
  }

  peek(){
    return this.top;
  }
}

module.exports = class {
  constructor(){
    this.forwardStack = new Stack();
    this.backwardStack = new Stack();
  }

  enqueue(val){
    this.forwardStack.push(val);
    return this;
  }

  dequeue(){
    if(this.backwardStack.size === 0){
      while(this.forwardStack.size !== 0){
        this.backwardStack.push(this.forwardStack.pop().val);
      }
    }
    return this.backwardStack.pop();
  }
}