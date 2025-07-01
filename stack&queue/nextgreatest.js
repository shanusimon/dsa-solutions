let arr = [11,12,75,45,33,2,31,35];
function nextGreatElement(arr){
    let stack = [];
    let result = new Array(arr.length).fill(-1);
    
    for(let i = arr.length - 1;i >= 0;i--){
        let crr = arr[i];
        
        while(stack.length > 0 && stack[stack.length - 1] <= crr){
            stack.pop()
        }
        
        if(stack.length > 0){
            result[i] = stack[stack.length - 1];
        }
        
        stack.push(crr)
    }
    return result
}

console.log(nextGreatElement(arr))