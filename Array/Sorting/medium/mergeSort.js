let arr = [8,7,6,5,4,3,2,1];

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let rigth = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(rigth);

    return merge(sortedLeft,sortedRight);
}

function merge(left,right){
    let result = [];
    let i = 0;
    let j = 0;
    while(j <right.length && i < left.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++
        }else{
            result.push(right[j]);
            j++
        }
    }
    while(i < left.length){
        result.push(left[i]);
        i++
    }
    while(j < right.length){
        result.push(right[j]);
        j++
    }
    return result
}

console.log(mergeSort(arr))