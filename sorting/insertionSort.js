/**
 * insertion sort
 *
 * builds up the sort by gradually creating a
 * larger left half which is allways sorted
 *
 *  Time Complexity (Average and Worst): O(n^2)
 */

function insertionSort(arr) {
  var currentVal
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
    console.log(arr)
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))
