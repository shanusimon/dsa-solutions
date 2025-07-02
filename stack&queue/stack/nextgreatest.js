let arr = [11,12,75,45,33,2,31,35];

function nextGreatElement(arr){
    //this is the stack we are going to add elements form the right 
    let stack = [];
    // this is the result arr 
    let result = new Array(arr.length).fill(-1);
    
    for(let i = arr.length - 1;i >= 0;i--){
        //from right crr element 
        let crr = arr[i];
        //if stack is not empty and crr element is greter then stack last element there is no use in the stack last element so we just pop it 
        while(stack.length > 0 && stack[stack.length - 1] <= crr){
            stack.pop()
        }
        //when we find the largest element we will update the result
        if(stack.length > 0){
            result[i] = stack[stack.length - 1];
        }
        //push crr element into stack for furthur use
        stack.push(crr)
    }
    return result
}

console.log(nextGreatElement(arr))