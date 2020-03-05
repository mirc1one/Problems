/**
 * Hi, here's your problem today. This problem was recently asked by Twitter:
 * 
 * Find all words that are concatenations of a list.
 * 
 * Input:
 * ["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]
 * 
 * Output:
 * ['techlead', 'catsdog']
 *     
 * input = ["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]
 * 
 */

const input = ['tech', 'lead', 'techlead', 'cat', 'cats', 'dog', 'catsdog']
const output = new Set()

for ( let i of input ) {
    for ( let j of input ) {
        if ( i === j ) {
            continue
        }
        
        if ( input.includes( i + j ) ) {
            output.add( i + j )
            continue
        }

        if ( input.includes( j + i ) ) {
            output.add( j + i )
        }
    }
}

console.log( output )