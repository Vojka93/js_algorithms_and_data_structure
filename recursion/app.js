/**
 *  call stack
 *
 * an example to be executed in dev tools
 * (Sources tab). By adding the breakpoint
 * at the wakeUp() function invocation and
 * starting the debugger
 */

function takeShower() {
  return 'Showering!'
}

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake']
  return items[Math.floor(Math.random() * items.length)]
}

function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log('Ok ready to go to work!')
}

// wakeUp()

/**
 * recursive function
 *
 * invoke the same function with
 * a different input untill
 * reaching base case
 *
 * base case: the condition where
 * the recursion ends
 */

function countDown(num) {
  // base case
  if (num <= 0) {
    console.log('All done!')
    return
  }
  console.log(num)
  num--
  // different input
  countDown(num)
}

// countDown(19)

// sumRange
function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

sumRange(4)

/**
 * factorial
 *
 * factorial(4) // 4*3*2*1
 */

// writing factorial iteratively
function iteratingFactorial(num) {
  let total = 1
  for (let i = num; i > 0; i--) {
    num *= i
  }
  return total
}

// writing factorial recursively
function recursiveFactorial(num) {
  // base case
  if (num === 0) return 1
  // different input
  return num * recursiveFactorial(num - 1)
}

/**
 * helper method recursion
 *
 * write a function collectOdds that
 * collects odd values in an array
 * with a helper method recursion
 */

function collectOdds(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}

/**
 * pure recursion
 *
 * write a function collectOdds that
 * collects odd values in an array
 * with pure recursion
 */

function collectOdds(arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)))
  return newArr
}

/**
 * power
 *
 * write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of (<code>Math.pow()</code>) 👀
 *
 * power(2,0) // 1
 * power(2,2) // 4
 * power(2,4) // 16
 */

function power(base, exponent) {
  // base case
  if (exponent === 0) return 1
  // different input
  return base * power(base, exponent - 1)
}

/**
 * write a function called productOfArray which
 * takes in an array of numbers and returns the
 * product of them all.
 */

// productOfArray recursively
function productOfArray(arr) {
  // base case
  if (arr.length === 0) {
    return 1
  }
  // different input
  return arr[0] * productOfArray(arr.slice(1)) //slice(1) removes the first element
}

// productOfArray with .reduce method
function productOfarry(arr) {
  return arr.reduce((total, num) => {
    return total * num
  }, arr[0])
}

productOfarry([1, 2, 3, 10]) // 60

/**
 * fibonacci
 *
 * write a recursive function called fib  which accepts
 * a number and returns the nth number in the Fibonacci
 * sequence. Recall that the Fibonacci sequence is the
 * sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
 * starts with 1 and 1, and where every number thereafter
 * is equal to the sum of the previous two numbers.
 *
 * fib(4) // 3
 */

function fib(num) {
  if (num <= 2) return 1
  return fib(num - 1) + fib(num - 2)
}

fib(4) // 3
