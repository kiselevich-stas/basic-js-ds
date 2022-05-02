const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.AllRoot = null;
  }

  root() {
	console.log(this.AllRoot);
    return this.AllRoot;
  }

  add(data) {

	this.AllRoot = addNode(this.AllRoot,data)
	
    function addNode(node, data) {
		
		if (!node) return new Node(data);
  
		if (node.data === data) return node;
  
		if (data > node.data) {
		  node.right = addNode(node.right, data);
		} else {
		  node.left = addNode(node.left, data);
		}
  
		return node
	  }
  }

  has(data) {
	let aaa =  this.find(data) ? true: false;
	console.log(aaa); 
	// return this.find(data) ? true: false;
	return aaa;
  }

  find(data) {

	return searchNode(this.AllRoot, data);

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
	this.AllRoot = removeNode(this.AllRoot, data);

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
    if(!this.AllRoot) return null
	let curr = this.AllRoot
	while(curr.left){
		curr = curr.left 
	}
	return curr.data
  }

  max() {
    if(!this.AllRoot) return null
	let curr = this.AllRoot
	while(curr.right){
		curr = curr.right 
	}
	return curr.data
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
// tree.add(12);
// console.log(tree.add(16));
// console.log(tree.add(1));

// console.log(tree.add(2));
// console.log(tree.add(3));
// console.log(tree.add(4));
// console.log(tree.has(2));
// console.log(tree.has(3));
// console.log(tree.root().data);