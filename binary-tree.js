'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var node = new Node(data, null, null);

    var current;
    if (this.root === null) {
      this.root = node;
    } else {
      current = this.root;
      while(true) {
        //if the new value is less than this node's value, go left
        if (data < current.data) {
            //if there's no left, then the new node belongs there
            if (current.left === null) {
                current.left = node;
                break;
            } else {
                current = current.left;
        }

        //if the new value is greater than this node's value, go right
      } else if (data > current.data) {

            //if there's no right, then the new node belongs there
            if (current.right === null) {
                current.right = node;
                break;
            } else {
                current = current.right;
            }

        //if the new value is equal to the current one, just ignore
        } else {
            break;
        }
    }
	}
}


	contains(data) {
		var current = this.root,
			found = false;
		while (!found && current) {
			if (data < current.data) {
				current = current.left;
			} else if (data > current.data) {
				current = current.right;
			} else {
				found = true;
			}
		}
		return found;
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
