// LeetCode 283 - Move Zeros
// 🔹 Goal: Move all 0's to the end while maintaining the relative order of the non-zero elements

// ✅ Brute Force Approach
// Time: O(n), Space: O(n) - using extra space to store non-zero elements

function moveZeroBruteForce(arr) {
  let temp = []; // Create a temporary array to store non-zero elements

  // Step 1: Push all non-zero elements to temp array
  for (let val of arr) {
    if (val !== 0) {
      temp.push(val);
    }
  }

  // Step 2: Copy elements from temp array back to the original array
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  // Step 3: Fill remaining positions in original array with 0
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log("Brute Force:", moveZeroBruteForce([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]


// ✅ Two Pointer Approach
// Time: O(n), Space: O(1) - in-place swap without using extra space

function moveZeroTwoPointer(arr) {
  let left = 0; // Pointer for the position to place the next non-zero element

  // Iterate with right pointer through the array
  for (let right = 0; right < arr.length; right++) {
    // If non-zero is found, swap it with the element at 'left' pointer
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++; // Move left to next position
    }
  }

  return arr;
}

console.log("Two Pointer:", moveZeroTwoPointer([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
