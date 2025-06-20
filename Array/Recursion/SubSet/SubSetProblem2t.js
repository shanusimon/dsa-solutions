// "Given an array of integers and a target sum, return all subsets of the array whose elements sum up to the target.

function ReturnSubSum(array, sum) {
  let result = [];
  function backTrack(index, crrArr, s) {
    if (index === array.length) {
      if (s === sum) {
        result.push([...crrArr]);
      }
      return;
    }
    crrArr.push(array[index]);
    s += array[index];
    backTrack(index + 1, crrArr, s);
    crrArr.pop();
    s -= array[index];
    backTrack(index + 1, crrArr, s);
  }
  backTrack(0, [], 0);
  return result;
}
console.log(ReturnSubSum([1, 2, 3,3,4,2,4,55,63,3,2,2,2,1], 17));
