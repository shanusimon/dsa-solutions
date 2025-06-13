let arr = [8,7,6,5,4,3,2,1];

function qucikSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let left =[];
    let right = [];
    let pivot = arr[arr.length - 1];

    for(let i = 0;i<arr.length;i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }

    return [...qucikSort(left),pivot,...qucikSort(right)]
}

console.log(qucikSort(arr))