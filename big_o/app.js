// sum of all numbers from 1 up to (and including) n

// faster solution O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2
}

// slower solution O(n)
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }

  return total
}

var timeOne = performance.now()
addUpTo(100000000)
var timeTwo = performance.now()
console.log(`Time elapsed: ${(timeTwo - timeOne) / 1000} seconds.`)

function countUpAndDown(n) {
  console.log("Going up!")
  for (var i = 0; i < n; i++) {
    console.log(i)
  }
  console.log("At the top!\nGoing down...")
  for (var j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log("Back down. Bye!")
}

countUpAndDown(10)

// nested for loop O(n*2)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
