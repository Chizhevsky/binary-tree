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
        if (data < current.data) {
            if (current.left === null) {
                current.left = node;
                break;
            } else {
                current = current.left;
        		}
      	} else if (data > current.data) {
            if (current.right === null) {
                current.right = node;
                break;
            } else {
                current = current.right;
            }
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
		var del, prev_del, r, prev_r;
		del = this.root;
		prev_del = null;
		while (del && del.data != data ) {
			prev_del = del;
			if (del.data > data) {
				del = del.left;
			} else {
				del = del.right;
			}
		}
		if (!del) {
			return false;
		}
		if (!del.right) {
			r = del.left;
		}	else if (!del.left) {
			r = del.right;
		} else {
			prev_r = del;
			r = del.left;
			while (r.right) {
				prev_r = r;
				r = r.right;
			}
			if (prev_r == del) { //!
				r.right = del.right;
			} else {
				r.right = del.right;
				prev_r.right = r.left;
				r.left = prev_r;
			}
		}
		if (del == this.root){
			this.root = r;
		} else if (del.data < prev_del.data){
			prev_del.left  = r;
		} else {
			prev_del.right = r;
		}
		//free (del);
	}

	size() {

	}

	isEmpty() {
		var current = this.root;
		if (current === null) {
			return isEmp;
		} else {
			isEmp = false;
			return isEmp;
		}
	}
}
