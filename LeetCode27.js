// LeetCode 27: Remove Element

let arr = [3, 2, 2, 3];
let val = 3;

// 🔹 Brute Force Approach

let n = arr.length;

for (let i = 0; i < n; i++) { 
    // Iterate over each element in the array
    if (arr[i] === val) { 
        // If the current element matches the value to remove,
        // we need to shift all elements after it one step to the left
        for (let j = i; j < n - 1; j++) { 
            // Shift elements from index 'i' to second last index
            // (because last element doesn't have a next value)
            arr[j] = arr[j + 1]; // Overwrite current element with next one
        }
        n--; // Decrease array size logically since one element is removed
        i--; // Step back to re-check the current index (it now holds a new value)
    }
}

console.log(arr); // Final array with val removed (logical part up to n)
console.log(n);   // New length after removal


// 🔹 Two-Pointer Approach (Optimized)

function RemoveElement(arr, val) {
    let k = 0; 
    // Pointer to track the next position to write a valid (non-val) element

    for (let i = 0; i < arr.length; i++) {
        // Iterate through the array using 'i' as the read pointer

        if (arr[i] !== val) {
            // If current element is not the value to remove

            arr[k] = arr[i]; 
            // Write the valid element at the 'k' index (overwrite if needed)

            k++; 
            // Move the write pointer forward for the next valid value
        }
    }

    return k; 
    // Return the new length — first 'k' elements in the array are valid
}
