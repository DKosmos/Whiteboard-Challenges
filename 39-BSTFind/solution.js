'use strict';

module.exports = function bstFind(BST, find){
  let bool = false;
  _traverse(BST);
  function _traverse(node){
    if(node.val === find) bool = true;
    if(node.left && bool === false) _traverse(node.left);
    if(node.right && bool === false) _traverse(node.right);
  }
  return bool;
}