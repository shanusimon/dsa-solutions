class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  addToFirst(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  addToLast(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let crr = this.head;
      while (crr.next) {
        crr = crr.next;
      }
      crr.next = node;
    }
    this.size++;
  }

  remove(index) {
    if (this.isEmpty()) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }
    this.size--;
  }

  isPalindrome() {
    if (!this.head || !this.head.next) return true;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let left = this.head;
    let right = prev; 

    while (right) {
      if (left.value !== right.value) return false;
      left = left.next;
      right = right.next;
    }

    return true;
  }

  removeByValue(value) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let crr = this.head;
      while (crr.next && crr.next.value !== value) {
        crr = crr.next;
      }
      if (crr.next) {
        crr.next = crr.next.next;
        this.size--;
      } else {
        console.log("Value not found");
      }
    }
  }

  reverse() {
    let crr = this.head;
    let prev = null;
    while (crr) {
      let next = crr.next;
      crr.next = prev;
      prev = crr;
      crr = next;
    }
    this.head = prev;
  }

  middleElement() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

  checkCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  createCircular() {
    if (this.isEmpty()) {
      return;
    }
    let crr = this.head;
    while (crr.next) {
      crr = crr.next;
    }
    crr.next = this.head;
  }

  removeDuplicates() {
    let seen = new Set();
    let prev = null;
    let crr = this.head;
    while (crr) {
      if (seen.has(crr.value)) {
        prev.next = crr.next;
      } else {
        seen.add(crr.value);
        prev = crr;
      }
      crr = crr.next;
    }
  }

  print() {
    let crr = this.head;
    while (crr) {
      console.log(`${crr.value}->`);
      crr = crr.next;
    }
  }
}
const ll = new LinkedList();
ll.addToFirst(10);
ll.addToFirst(20);
ll.addToFirst(30);
ll.addToLast(100);
ll.addToLast(10);
ll.addToLast(100);
ll.print();
ll.removeDuplicates();
ll.print();
