/**
 * This problem was recently asked by Twitter:
 * 
 * Given an array of integers of size n, where all elements are between 1 and n inclusive, 
 * find all of the elements of [1, n] that do not appear in the array. 
 * Some numbers may appear more than once.
 * 
 * Example:
 * Input: [4, 5, 2, 6, 8, 2, 1, 5]
 * Output: [3, 7]
 * 
 */

const input = [4, 5, 2, 6, 8, 2, 1, 5]
// const input2 = [4, 6, 2, 6, 7, 2, 1]
const array = new Array( Math.max(...input) + 1 ).fill(0)

for ( let i = 0; i < array.length; i++ ) {
    array[ input[ i ] ]++
}

const missing = []
for ( let i = 1; i < array.length; i++ ) {
    if ( array[ i ] === 0 ) {
        missing.push( i )
    }
}

console.log( missing )