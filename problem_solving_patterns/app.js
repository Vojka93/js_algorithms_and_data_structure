/**
 * write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of the values must be the same
 *
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 */

function same(firstArr, secondArr) {
  //console.log(firstArr, secondArr)
  firstArr.forEach((element) => {
    if (secondArr.includes(element * element)) {
      return true
    } else {
      return false
    }
  })
}

// same([1, 2, 3], [1, 4, 9]);

/**
 * given two strings, write a function to determine if the
 * second string is an anagram of the first. An anagram is a word,
 * phrase or name formed by rearranging the letters of another
 * such as cinema formed from iceman.
 *
 * anagram("cinema", "iceman"); // true
 * anagram("boxin", "tyson"); // false
 */

// anagram example without a loop
function anagram(firstStr, secondStr) {
  const firstArr = firstStr.split('')
  const secondArr = secondStr.split('')
  firstArr.forEach((element) => {
    if (secondArr.includes(element)) {
      return true
    } else {
      return false
    }
  })
}

// anagram example with a loop and a counter object
function anagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const counter = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1)
  }
  console.log(counter)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!counter[letter]) {
      return false
    } else {
      counter[letter] -= 1
    }
  }
  console.log(counter)

  return true
}

//anagram('cinema', 'iceman')

/**
 * MULTIPLE POINTERS
 * write a function called sumZero which accepts a sorted
 * array of integers. The function should find the first pair
 * where the sum is 0. Return an array that includes both
 * values that sum to zero or undefined if a pair does not exist
 */

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])

/**
 * implement a function called counUniqueValues,
 * which accepts a sorted array, and counts the
 * unique values in the array. There can be negative
 * numbers in the array, but it will allways be sorted.
 *
 *                    i
 * countUniqueValues([1, 2, 2, 5, 7, 7, 99]) // 5
 *                       j
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
    console.log(i, j)
  }
  return i + 1
}

// countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

// console.log(typeof Infinity) // number

/**
 * write a function called maxSubarraySub which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements
 * in the array.
 *
 * maxSubarraySub([1,2,5,2,8,1,5], 2) // 10
 * maxSubarraySub([], 4) // null
 */

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

/**
 * divide and conquer pattern
 *
 * given a sorted array of integers, write a function
 * called search, that accepts the value and
 * returns the index where the value passed to the
 * function is located. If the value is not found,
 * return -1
 *
 * search([1,2,3,4,5,6], 4) // 3
 * search([1,3,5,6,7], 11) // -1
 */

function search(arr, val) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]

    if (arr[middle] < val) {
      min = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }

  return -1
}

// time complexity - Log(N)
search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 19])

/**
 * fizzbuzz
 *
 * Write a program that uses console.log to print all
 * the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of
 * the number, and for numbers divisible by 5 (and not 3),
 * print "Buzz" instead. When you have that working, modify
 * your program to print "FizzBuzz" for numbers that are
 * divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
 * for numbers divisible by only one of those).
 */

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

//fizzBuzz()

// chessboard
//
// write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the
// grid there is either a space or a "#" character. The characters should
// form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding
// size = 8 and change the program so that it works for any size, outputting
// a grid of the given width and height.

function chessBoard(width, height) {
  let row = ' '
  let chessBoard = ''
  for (let i = 0; i < width; i++) {
    if (row[row.length - 1] == ' ') {
      row += '#'
    } else {
      row += ' '
    }
  }

  for (let i = 0; i < height; i++) {
    chessBoard += row + '\n'
  }

  console.log(chessBoard)
}

chessBoard(16, 8)
