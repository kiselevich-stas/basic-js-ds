const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  root() {
    return this.root
  }

  add(data) {

	this.root = addNode(this.root,data)
    function addNode(node, data) {

		if (!node) return new Node(data);
  
		if (node.data === data) return node;
  
		if (data < node.data) {
		  node.left = addNode(node.left, data);
		} else {
		  node.right = addNode(node.right, data);
		}
  
		return node;
	  }
  }

  has(data) {
	return this.find(data) ? true: false;
  }

  find(data) {
	return searchNode(this.root, data);

    function searchNode(node, data) {

      if (!node) return null;

      if (node.data === data) return node;

      if (data < node.data) {
        return searchNode(node.left, data)
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  remove(data) {
	this.root = removeNode(this.root, data);

    function removeNode(node, data) {

      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if ( data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let right = node.right;
        while (right.left) {
			right = right.left;
        }
        node.data = right.data;

        node.right = removeNode(node.right, right.data);

        return node;
      }
    }
}

  min() {
    if(!this.root) return null
	let curr = this.root
	while(curr.left){
		curr = curr.left 
	}
	return curr.data
  }

  max() {
    if(!this.root) return null
	let curr = this.root
	while(curr.right){
		curr = curr.right 
	}
	return curr.data
  }
}

module.exports = {
  BinarySearchTree
};