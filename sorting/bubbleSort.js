/**
 * sorting
 *
 * is the process of rearraging the items
 * in a collection e.g. an array so that
 * the items are in some kind of order
 *
 * there are many different ways to sort
 * things, and different techniques have their
 * own advantages and disadvantages
 */

// [23, 45, 6, 12, 13]

// JS .sort() built in method
// console.log(
//   [23, 45, 6, 12, 13].sort((a, b) => {
//     return a - b
//   })
// )

/**
 * bubble sort (not really efficent)
 *
 * sorthing algorithm where the largest values bubble up to the top
 * 
 * Big O: O(n^2)
 */

function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    console.log("ONE PASS COMPLETE!")
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort([23, 45, 6, 12, 13]))
