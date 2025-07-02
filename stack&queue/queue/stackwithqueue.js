class StackWithQueue {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(element) {
    this.q2.push(element);
    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }

    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
  }
  pop() {
    return this.q1.shift();
  }
  display() {
    for (let i of this.q1) {
      console.log(i);
    }
  }
}


const stack = new StackWithQueue();
stack.push(11);
stack.push(22);
stack.push(20);
stack.pop()
stack.display()