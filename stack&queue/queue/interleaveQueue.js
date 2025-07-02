//what is interleaving in queues 
//Interleaving is the process of combining two halves of a queue by alternating elements from each half.

function interLeaveQueue(queue){
    if (queue.length % 2 !== 0) {
        console.log("Queue length must be even");
        return;
    }
    let n = queue.length;
    let firstHalf = [];
    let half = n / 2;
    
    for(let i = 0;i<half;i++){
        firstHalf.push(queue.shift());
    }

    while(firstHalf.length > 0){
        queue.push(firstHalf.shift());
        queue.push(queue.shift())
    }
    return queue
}
let queue = [10, 20, 30, 40, 50, 60];
console.log(interLeaveQueue(queue))