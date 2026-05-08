class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree {
  root: TreeNode<number> | null = null;

  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  private insertNode(node: TreeNode<number>, newNode: TreeNode<number>): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: number): TreeNode<number> | null {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<number> | null, value: number): TreeNode<number> | null {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    }
    return node;
  }

  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: TreeNode<number> | null, value: number): TreeNode<number> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.deleteNode(node.right, minNode.value);
      return node;
    }
  }

  private findMinNode(node: TreeNode<number>): TreeNode<number> {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  update(oldValue: number, newValue: number): boolean {
    const node = this.search(oldValue);
    if (node !== null) {
      this.delete(oldValue);
      this.insert(newValue);
      return true;
    }
    return false;
  }

  getHeight(): number {
    return this.calculateHeight(this.root);
  }

  private calculateHeight(node: TreeNode<number> | null): number {
    if (node === null) {
      return 0;
    }
    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
