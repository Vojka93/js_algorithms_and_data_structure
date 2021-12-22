/**
 * selection sort
 *
 * similar to bubble sort but instead of first
 * placing larger values into sorted position, it
 * places small values into sorted position
 *
 * Time Complexity (Average and Worst): O(n^2)
 */

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i
    for (var j = i + 1; j < arr.length; j++) {
      // console.log(i, j)
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    // SWAP!
    if (i !== min) {
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
    console.log(arr)
  }
  return arr
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (i !== min) swap(arr, i, min)
    console.log(arr)
  }

  return arr
}

selectionSort([23, 45, 6, 12, 13])