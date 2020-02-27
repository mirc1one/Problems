/*
 * Cerinta : sa se sorteze matricea crescator
 *
 * Complexity : O(n^2)
**/

const matrix = [
    [24, 27, 1, 3],
    [30, 5, 10, 8],
    [31, 11, 16, 15]
]

const rowLength = matrix.length
const columnLength = matrix[0].length
const total = rowLength * columnLength

// r + c = pozitia
let r = 0
let c = 0
let nextRow = 0
let nextCol = 0

// debugger
for (let i = 0; i < total; i++) {    
    r = c = 0

    const currentTotal = total - i - 1
    for (let j = 0; j < currentTotal; j++) {
        // next
        if (j % columnLength === 0 && j !== 0) {
            r++
            c = 0
        } else if (j !== 0) {
            c++
        }

        let current = matrix[r][c]
        let next

        if (c === columnLength - 1) {
            next = matrix[r + 1][0]
            nextRow = r + 1
            nextCol = 0
        } else {
            next = matrix[r][c + 1]
            nextRow = r
            nextCol = c + 1
        }
        
        if (current > next) {
            const tmp = next
            matrix[ nextRow ][ nextCol ] = matrix[r][c]
            matrix[r][c] = tmp
        }
    }
}

console.log(matrix)
