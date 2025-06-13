let arr = [8, 7, 6, 5, 4, 3, 2, 1];

function quickSort(arr) {
    // Base case: An array with 0 or 1 element is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the last element as the pivot
    let pivot = arr[arr.length - 1];

    // Create arrays to hold elements less than and greater than the pivot
    let left = [];
    let right = [];

    // Partitioning loop (excluding the pivot itself)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);   // Elements smaller than pivot go to left
        } else {
            right.push(arr[i]);  // Elements greater or equal to pivot go to right
        }
    }

    // Recursively sort left and right, then merge with pivot in between
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Run the sort
console.log(quickSort(arr));


//Time complexity will be O(n log n)
//worst case O(n^2)