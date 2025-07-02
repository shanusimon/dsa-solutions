class Queue{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length === 0;
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift();
    }
     peek(){
        if(this.isEmpty()) return "Queue is empty";
        return this.items[0]; 
    }
     print(){
        if(this.isEmpty()) return "Queue is empty";
        return this.items;
    }
}