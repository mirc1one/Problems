/**
 * This problem was recently asked by Amazon:
 * You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.
 * 
 * For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence 1, 2, 3, 4, 
 * and thus, you should return its length, 4.
 * 
 * function longest_consecutive([100, 4, 200, 1, 3, 2])
 * 4
 * 
 * Can you do this in linear time? (this means: O(n))
 */

const arr = [100, 4, 200, 1, 3, 2]

function longest_consecutive( array ) {
    let length = array.length
    let longestSequence = 0
    let currentIndex = array.indexOf( Math.min( ...array ) )
    let currentSequence = 0

    while ( length !== 0 ) {
        let currentElement = array[ currentIndex ]
        let tryNext = array.indexOf( currentElement + 1 )
        
        currentSequence++
        array.splice( currentIndex, 1 )
        longestSequence = longestSequence < currentSequence ? currentSequence : longestSequence

        if ( tryNext !== -1 ) {
            currentIndex = tryNext > currentIndex ? tryNext - 1 : tryNext
        } else {
            currentIndex = array.indexOf( Math.min( ...array ) )
            currentSequence = 0
        }

        length--
    }

    return longestSequence
}

console.log( longest_consecutive( arr ) )