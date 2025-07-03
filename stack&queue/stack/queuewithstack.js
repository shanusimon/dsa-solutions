class QueueWithStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }
   isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("The Stack Is Empty");
      return;
    }
    //stack1 is to add elements 
    //in this first we need to add values from stack 1 using pop and push it into stack2 to get reversed 
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.isEmpty()) return null;

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  print(){
    const temp = [...this.stack2].reverse().concat(this.stack1);
    console.log("Queue:", temp.join(" <- "));
  }
}

const queue = new QueueWithStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();  

console.log(queue.dequeue());  
queue.print(); 