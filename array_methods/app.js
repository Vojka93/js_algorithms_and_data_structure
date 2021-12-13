console.log(Array.prototype)

/**
 * concat
 *
 * used to merge two or more arrays, and
 * it does not mutate the original array but
 * instead returns a new one.
 */

const oldFriends = ['Jake', 'Mikenzi', 'Jessica']
const newFriends = ['Merrick', 'Cash']

const friends = oldFriends.concat(newFriends) // Jake, Mikenzi, Jessica, Merrick, Cash

/**
 * every
 *
 * determines if every element in an array passes
 * certain test. The function passed to every gets
 * invoked once for each element in the array. If it encounters
 * a falsy value every will stop executing and return false, otherwise
 * if the function passed to every never returns falsy value,
 * then every will return true.
 */

const ages1 = [18, 21, 28, 34, 22]

const groupCanVote = ages1.every((age) => {
  return age >= 18
})

const groupCanDrink = ages1.every((age) => {
  return age >= 21
})

console.log(groupCanVote) // true
console.log(groupCanDrink) // false

/**
 * fill
 *
 * the fill method changes all elements in an array to a static value,
 * from a start index (default 0) to an end index (default array.length).
 * It returns the modified array.
 */

const array1 = [1, 2, 3, 4]

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1)) // [1, 5, 5, 5]

console.log(array1.fill(6)) // [6, 6, 6, 6]

console.log(Array(10).fill()) // array of 10 undefined elements ( not empty array )

// Array(10)
//   .fill()
//   .map(() => {
//     return doSomething()
//   })

/**
 * filter
 *
 * creates a new array after filtering out
 * elements that don't pass a test specified
 * by a given function. It doesn't modify the
 * original array, instead, it returns a new array.
 */

const tweets = [
  {
    id: 1,
    stars: 13,
    text: 'Turns out "git reset --hard HEAD^" was a terrible idea.',
  },
  {
    id: 2,
    stars: 87,
    text: 'Tech conferences are too expensive.',
  },
  {
    id: 3,
    stars: 51,
    text: 'Clean code is subjective. Optimize for deletion.',
  },
  {
    id: 4,
    stars: 19,
    text: 'Maybe the real benefit of open source was the friendships we made along the way?',
  },
]

const popularTweets = tweets.filter((tweet) => {
  return tweet.stars > 50
})

console.log(popularTweets) // 87, 51

/**
 * find
 *
 * the find method returns the value of the first
 * element in the provided array that satisfies
 * the provided testing function. If no values
 * satisfy the testing function, undefined is returned.
 */

const tweet = tweets.find((tweet) => tweet.id === 3)

console.log(tweet) // {id: 3, stars: 51, text: "Clean code is subjective. Optimize for deletion."}

/**
 * findIndex
 *
 * similar to .find, but instead of returning
 * the element, it returns the index where the
 * element is located.
 */

const index = tweets.findIndex((tweet) => tweet.id === 3)

console.log(index) // 2

/**
 * forEach
 *
 * invokes a provided function once for each item
 * in the array. Note .forEach is similar to .map
 * except .map returns a new array, .forEach has no
 * return value.
 */

friends.forEach((friend) => console.log(friend))

/**
 * includes
 *
 * determines if a particular value is found in
 * an array. indexOf has the same behavior but
 * as of ES6, includes is more intuitive.
 */

console.log(friends.includes('Jake')) // true
console.log(friends.includes('Tyson')) // false

/**
 * indexOf
 *
 * returns the index of a particular value
 * If that value doesn't exist in the array,
 * it returns -1.
 */

friends.indexOf('Jake') // 0
friends.indexOf('Karl') // -1

/**
 * join
 *
 * joins all elements of an array into a string
 * and returns it. By default, when converted into
 * a string, each item in the array will be separated
 * by a comma. It can be changed by passing in a custom
 * separator as the first argument.
 */

const splitSentence = ['how', 'are', 'you', 'today']

splitSentence.join() // how,are,you,today
splitSentence.join(' ') // how are you today

/**
 * map
 *
 * map method creates a new array populated with
 * the results of calling a provided function on
 * every element in the calling array.
 */

const tweetIds = tweets.map((tweet) => tweet.id)

console.log(tweetIds) // [1, 2, 3, 4]

/**
 * pop
 *
 * removes last element from an array and returns it.
 * it mutates the array (not cool🥴) and is better to use
 * filter instead.
 */

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop()) // tomato

console.log(plants) // ["broccoli", "cauliflower", "cabbage", "kale"]

/**
 * push
 *
 * adds an item to the end of the array and returns
 * the array's new length. It's better to use .concat
 * because push mutates the array.
 */

const animals2 = ['pigs', 'goats', 'sheep']

const count = animals2.push('cows')
console.log(count) // 4
console.log(animals2) // ["pigs", "goats", "sheep", "cows"]

/**
 * reduce
 *
 * with reduce you can take an array and transform it into
 * anything else - another array, an object, an integer,
 * literally anything.
 *
 * basic pattern to decide whether or not to use reduce:
 *
 * 1) Am I transforming an array into another array just by removing some elements? Use .filter
 *
 * 2) Am I transforming an array into another array? Use .map
 *
 * 3) Am I transforming an array into something other than another array? Use .reduce
 *
 *
 * reduce method executes a user-supplied “reducer” callback function
 * on each element of the array, in order, passing in the return value
 * from the calculation on the preceding element. The final result of running
 * the reducer across all elements of the array is a single value. If supplied,
 * an initial value may be used as the second argument.
 */

function sum(arr) {
  return arr.reduce((total, num) => {
    return total + num
  }, 0)
}

sum([1, 2, 3]) // 6
sum([5, 5, 5]) // 15

/**
 * reverse
 *
 * reverses the order of an array.
 * This method mutates the original array.
 */

const letters = ['a', 'b', 'c']
letters.reverse()

console.log(letters) // ['c', 'b', 'a']

// "how do you reverse a string?"

const string = 'I like JavaScript'
const arr = string.split('') // convert the string into an array

// then reverse the array and join it back to a string.
arr.reverse().join('') // "tpircSavaJ ekil I"

/**
 * shift
 *
 * removes the first element from an array and returns that
 * removed element. This method changes the length of the array.
 * It's better to use .filter instead of .shift because
 * mutations are not very cool.
 */

const array2 = [1, 2, 3]

const firstElement = array2.shift()

console.log(array2) // [2, 3]

console.log(firstElement) // 1

/**
 * slice
 *
 * creates a new array from a portion of an existing array.
 * It also doesn't modify the original array.
 */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)) // ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)) // ["camel", "duck"]

console.log(animals.slice(1, 5)) // ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)) // ["duck", "elephant"]

console.log(animals.slice(2, -1)) // ["camel", "duck"]

/**
 * some
 *
 * used to determine if any element in an array passes a test
 * specified by a given function. The function passed to some
 * gets invoked once for each element in the array. As soon as
 * that function returns a truthy value, some will stop executing
 * and return true. If the function passed to some never returns
 * a truthy value, then some will return false.
 */

const ages2 = [6, 14, 12, 22, 13]

const hasAdultSupervision = ages2.some((age) => {
  return age >= 21
})

const canRentCar = ages2.some((age) => {
  return age >= 25
})

console.log(hasAdultSupervision) // true
console.log(canRentCar) // false

/**
 * sort
 *
 * sort elements in an array.
 *
 * sort is mutative so each time it's invoked,
 * it's modifying the original array.
 */

// sorting an array of strings
const months1 = ['March', 'Jan', 'Feb', 'Dec']
months1.sort()
console.log(months1) // ["Dec", "Feb", "Jan", "March"]

// sorting an array of integers
// pass in a function and return the first argument minus the second argument.
const randomNumbers = [21, 19, 35, 38, 18, 23]
randomNumbers.sort((a, b) => a - b)

console.log(randomNumbers) // [18, 19, 21, 23, 35, 38]

// sorting an array of objects
const users = [
  { name: 'Jim', age: 28 },
  { name: 'Alex', age: 32 },
  { name: 'Mikenzi', age: 26 },
  { name: 'Christina', age: 42 },
]

users.sort((a, b) => a.age - b.age)
console.log(users)

users.sort((a, b) => a.name > b.name)
console.log(users)

/**
 * splice
 *
 * adds or removes items from anywhere inside of an array.
 * It's mutative so it's better using another method that isn't
 * mutative like .slice, .map, .filter or the spread operator.
 */

const months2 = ['Jan', 'March', 'April', 'June']
months2.splice(1, 0, 'Feb') // inserts at index 1
console.log(months2) // ["Jan", "Feb", "March", "April", "June"]

/**
 * unshift
 *
 * adds one or more elements to the beginning of an array
 * and returns the array's new length. It's better to use
 * .concat since .shift is mutative.
 */

const ages3 = [22, 27, 29]

ages3.unshift(20) // 4
console.log(ages3) // [20,22,27,29]
