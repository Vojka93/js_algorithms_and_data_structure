// let data = Array.apply(null, { length: 100 }).map(Function.call, Math.random)
// const arr = Array(100).fill(null).map(Math.random);
// console.log(data)
// console.log(arr)

/**
 *
 * merge sort → combination of merging (arrays) and sorting
 * exploints the fact that arrays of 0 or 1 are allways sorted
 *
 *  Time Complexity (Average and Worst): O(n log n) 
 *  Space complexity: O(n)
 */

// merge function that merges two sorted arrays
function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}

// recursive merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([14, 400, 8, 3, 10]))
