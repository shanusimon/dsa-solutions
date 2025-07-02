function nextGreatestElementII(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];
  // Loop twice to simulate circular array
  for (let i = 2 * n - 1; i >= 0; i--) {
    let index = i % n;
    let crr = arr[index];
    // Pop all elements from stack smaller than or equal to current
    while (stack.length > 0 && stack[stack.length - 1] < crr) {
      stack.pop();
    }
    // Only update result in first pass (i < n)
    if (i < n) {
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
    }
    // Push current element onto stack
    stack.push(crr);
  }
  return result;
}

console.log(nextGreatestElementII([31, 2, 12, 343, 23, 30]));
