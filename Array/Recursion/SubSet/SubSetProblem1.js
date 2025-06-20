
// Write a function that takes an array of integers as input and returns all possible subsets of the 
// array, where each subset is represented as an object with keys a1, a2, ..., an and values corresponding to the elements of the subset.


function subSets(arr){
    let result = [];
    let count = 1;
    function backTrack(index,elements){
        if(arr.length === index){
            let obj = {}
            obj[`a${count++}`] = [...elements];
            result.push(obj)
            return
        }
        elements.push(arr[index]);
        backTrack(index + 1,elements);
        elements.pop();
        backTrack(index + 1,elements);
    }
    backTrack(0,[])
    return result
}

console.log(subSets([1,2,3,3,4,23,2,3,4,12,413,423,423,423,423,4,12,231,31]))