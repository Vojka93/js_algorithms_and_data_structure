/**
 * quick sort
 *
 * pivot!
 *
 * pick a number called "pivot" and then move lesser
 * number before it and greater numbers after it
 */

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  var pivot = arr[start]
  var swapIdx = start

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
      console.log(arr)
    }
  }
  swap(arr, start, swapIdx)
  console.log(arr)
  return swapIdx
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right) //3
    //left
    quickSort(arr, left, pivotIndex - 1)
    //right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])
