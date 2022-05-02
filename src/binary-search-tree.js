const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor () {
		this.rootTree = null;
	}

	root() {
		return this.rootTree;
		// remove line with error and write your code here
	}

	add(data) {
		this.rootTree = addElement(this.rootTree, data);

		function addElement(node, data) {
			if (node === null) {
				return new Node(data);
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				node.left = addElement(node.left, data);
			} else {
				node.right = addElement(node.right, data);
			}
			return node;
		}
		// remove line with error and write your code here
	}

	has(data) {
		return hasElement(this.rootTree, data);

		function hasElement(node, data) {
			if (node === null) {
				return false;
			}

			if (node.data === data) {
				return true;
			}

			if (data < node.data) {
				return hasElement(node.left, data);
			} else {
				return hasElement(node.right, data);
			}
		}
		// remove line with error and write your code here
	}

	find(data) {
		return findElement(this.rootTree, data);

		function findElement(node, data) {
			if (node === null) {
				return null;
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				return findElement(node.left, data);
			} else {
				return findElement(node.right, data);
			}
		}
		// remove line with error and write your code here
	}

	remove(data) {
		this.rootTree = removeElement(this.rootTree, data);

		function removeElement(node, data) {
			if (node === null) {
				return null;
			}

			if (data < node.data) {
				node.left = removeElement(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = removeElement(node.right, data);
				return node;
			} else {
				if (node.left === null && node.right === null) {
					return null;
				}
				if (node.left === null) {
					node = node.right;
					return node;
				}
				if (node.right === null) {
					node = node.left;
					return node;
				}
				let minRight = node.right;
				while (minRight.left !== null) {
					minRight = minRight.left;
				}
				node.data = minRight.data;
				node.right = removeElement(node.right, minRight.data);
				return node;
			}
		}
		// remove line with error and write your code here
	}

	min() {
		return minElement(this.rootTree, null);

		function minElement(node) {
			if (node === null) {
				return null;
			}
			if (node.left === null) {
				return node.data;
			}
			return minElement(node.left);
		}

	}

	max() {
		return maxElement(this.rootTree, null);

		function maxElement(node) {
			if (node === null) {
				return null;
			}
			if (node.right === null) {
				return node.data;
			}
			return maxElement(node.right);
		}

	}
}


module.exports = {
	BinarySearchTree
};