/**
 * This problem was recently asked by Apple:
 * 
 * A fixed point in a list is where the value is equal to its index. 
 * So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list since the index and value is the same. 
 * Find a fixed point (there can be many, just return 1) 
 * in a sorted list of distinct elements, or return None if it doesn't exist.
 * 
 * Here is a starting point:
 * function find_fixed_point(nums):
 * 
 * print find_fixed_point([-5, 1, 3, 4])
 * 1
 * 
 * Can you do this in sublinear time?
 * 
 */

const a = [-5, 1, 2, 4]

function find_fixed_point( array ) {
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[i] === i ) {
            return i
        }
    }

    return -1
}

console.log( find_fixed_point( a ) )
