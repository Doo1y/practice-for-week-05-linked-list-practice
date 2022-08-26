class LinkedListNode {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    this.head = new LinkedListNode(val, this.head);
    this.length++;
  }

  addToTail = function(value) {
    let lastNode = new LinkedListNode(value, null)
    if (this.head === null) {
      this.head = lastNode;
      return this.length++;
    } else {
      let currNode = this.head;
      while (currNode !== null) {
        if (currNode.next === null) {
          currNode.next = lastNode;
          return this.length++
        }
        else {
          currNode = currNode.next;
        }
      }
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;