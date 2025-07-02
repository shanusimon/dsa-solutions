class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  sort() {
    let tempStack = [];

    while (!this.isEmpty()) {
      let temp = this.pop();

      while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
        this.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
    while (tempStack.length > 0) {
      this.push(tempStack.pop());
    }
  }

  validPrantheses(str) {
    this.items = [];
    for (let i of str) {
      if (i === "(" || i === "[" || i === "{") {
        this.items.push(i);
      } else {
        if (this.items.length === 0) {
          return false;
        }
        let top = this.items.pop();
        if (
          i === "}" &&
          top !== "{" &&
          i === "]" &&
          top !== "[" &&
          i === ")" &&
          top !== "("
        ) {
          return false;
        }
      }
    }

    return this.items.length === 0;
  }
  print() {
    console.log(this.items.join("->"));
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.pop());
stack.print();
