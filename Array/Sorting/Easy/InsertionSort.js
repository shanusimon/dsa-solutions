//  Insertion Sort

/**
 *  Description:
 * In insertion sort, we build the sorted array one element at a time by inserting
 * each element into its correct position relative to the elements before it.
 * Think of sorting playing cards in your hand.
 * 
 *  Time Complexity:
 *   - Best Case:    O(n)        // When the array is already sorted
 *   - Average Case: O(n^2)
 *   - Worst Case:   O(n^2)      // When the array is sorted in reverse
 * 
 *  Space Complexity:
 *   - O(1) → In-place sorting
 * 
 *  
 */

function insertionSort(arr) {
    let n = arr.length;

    // Loop through the array starting from index 1
    for (let i = 0; i < n - 1; i++) {
        let j = i;

        // Compare the current element with elements before it
        // and swap until it is placed in the correct position
        while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }

    return arr;
}

//  Example usage
console.log(insertionSort([232, 34, 4, 23, 34, 534])); // Output: [4, 23, 34, 34, 232, 534]
