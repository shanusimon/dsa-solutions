//  Selection Sort

/**
 *  Description:
 * Selection Sort divides the array into a sorted and unsorted part.
 * It repeatedly selects the smallest element from the unsorted part
 * and swaps it with the first unsorted element.
 * 
 *  Example:
 * [12, 32, 4, 3, 1, 35]
 * Pass 1: [1, 32, 4, 3, 12, 35]  → minimum from rest is placed at index 0
 * Pass 2: [1, 3, 4, 32, 12, 35]
 * Pass 3: [1, 3, 4, 32, 12, 35]
 * ... and so on.
 * 
 * Time Complexity:
 *   - Best Case:    O(n^2)
 *   - Average Case: O(n^2)
 *   - Worst Case:   O(n^2)
 * 
 * Space Complexity:
 *   - O(1) → In-place sort
 * 
 * Not a stable sort (can be made stable but isn't by default)
 */

function selectionSort(arr) {
    let n = arr.length;

    // Loop through the array from index 0 to n-2
    for (let i = 0; i < n - 1; i++) {
        let mini = i;

        // Find the index of the smallest element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[mini] > arr[j]) {
                mini = j;
            }
        }
        // Swap the found minimum element with the first unsorted element
        [arr[i], arr[mini]] = [arr[mini], arr[i]];
    }
    return arr;
}

// Example usage
console.log(selectionSort([12, 32, 4, 3, 1, 35])); // Output: [1, 3, 4, 12, 32, 35]
