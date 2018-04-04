'use strict';

module.exports = function bstTraverse(BST){
  let res = [];
  _traverse(BST);
  function _traverse(node){
    res.push(node.val);
    if(node.left) _traverse(node.left);
    if(node.right) _traverse(node.right);
  }
  return res;
}