let arr = [8, 7, 6, 5, 4, 3, 2, 1];

function mergeSort(arr) {
    // Base case: An array with 0 or 1 element is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Divide: Find the midpoint and split the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort both halves
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    // Conquer: Merge the two sorted halves into one sorted array
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare elements from both arrays and push the smaller one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left side
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add any remaining elements from the right side
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Run the sort
console.log(mergeSort(arr));

/*
Time Complexity:
---------------
Best Case:    O(n log n)
Average Case: O(n log n)
Worst Case:   O(n log n)

Space Complexity: O(n)
- Because it uses additional arrays during merge steps.

Note:
- Merge Sort is always O(n log n), regardless of input order.
- It’s a stable sort (preserves order of equal elements).
- Preferred for linked lists and when stability is required.
*/
