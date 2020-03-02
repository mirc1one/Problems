/**
 * This problem was recently asked by Facebook:
 * 
 * Given an array and an integer k, rotate the array by k spaces. 
 * Do this without generating a new array and without using extra space.
 * 
 * Here's an example and some starter code
 * function rotate_list(nums, k):
 * 
 * a = [1, 2, 3, 4, 5]
 * rotate_list(a, 2)
 * print(a)
 * [3, 4, 5, 1, 2]
 * 
 */

const a = [1, 2, 3, 4, 5]

function rotate_list( array, k ) {
    k = k - 1 // - 1 for easier index handling
    const temp = array[ 0 ]

    for ( let i = 0; i < array.length - 1; i++ ) {
        array[ i ] = array[ i + 1 ]
    }

    array[ array.length - 1 ] = temp
    
    return k === 0 ? array : rotate_list( array, k )
}

console.log(rotate_list(a, 2))