// Bubble Sort
/**
 * Bubble sort repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order.
 * With each pass, the largest unsorted element is placed at the end.
 *
 * Time Complexity:
 *   - Best Case: O(n)          → when the array is already sorted
 *   - Average Case: O(n^2)
 *   - Worst Case: O(n^2)       → when the array is sorted in reverse
 * 
 * Space Complexity: O(1)       → in-place sort
 * 
 * 
 */
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Flag to check if any swap happened in this pass

        // After each iteration, the largest i elements are already sorted at the end.
        // So we reduce the range of j by i.
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if the left element is greater than the right
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // Optimization: If no elements were swapped, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}
// i counts how many elements are already sorted at the end of the array.
// j goes from 0 to n - i - 1 to compare all unsorted adjacent pairs

console.log(bubbleSort([8, 3, 7, 5])); // Output: [3, 5, 7, 8]
