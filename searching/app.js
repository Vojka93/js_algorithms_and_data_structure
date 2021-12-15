/**
 * linear search
 *
 * write a function called linearSearch which acceprts an array
 * and a value, and returns the index at which the value exists.
 * If the value does not exist in the array, return  -1.
 *
 * linearSearch([10,15,20,25,30], 15) // 1
 */

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }

  return -1
}

linearSearch([10, 15, 20, 25, 30], 30) // 4

/**
 * binary search pseudocode
 *
 * this function accepts a sorted array and a value;
 * create a left pointer at the start of the array, and a right pointer at the end of array;
 * while the left pointer comes before the right pointer:
 *  create a pointer in the middle
 *  if you find the value you want return the index
 *  if the value is too small, move the left pointer up
 *  if the value is too large, move the right pointer down
 * if you never find the value, return -1
 */

function binarySearch(arr, elem) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if (arr[middle] === elem) {
    return middle
  }
  return -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28], 15)

/**
 * string search
 *
 * find how many times there is a shorter
 * string into a longer string
 */

function naiveStringSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

naiveStringSearch('Lorie loled', 'lol') // count = 1

/**
 * minimum
 *
 * write a function min that takes two arguments and returns their minimum.
 * console.log(min(0, 10)); // 0
 * console.log(min(0, -10)); // -10
 */

function min(firstNum, secondNum) {
  if (firstNum < secondNum) return firstNum
  if (secondNum < firstNum) return secondNum
}

console.log(min(100,450)) // 100

