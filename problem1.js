/**
 * Cerinta : sa se sorteze matricea crescator N x M 
 */

/**
 * Complexitate: 3*O(n^2) sau 2*O(n^2) cu Array.flat()
 */
const matrix = [
    [24, 27, 1, 3],
    [30, 5, 10, 8],
    [31, 11, 16, 15]
]

const flatenedMatrix = []; // flatenedMatrix = matrix.flat()
for (let i = 0; i < matrix.length; i++) {
    const subMatrix = matrix[i]

    for (let j = 0; j < subMatrix.length; j++) {
        flatenedMatrix.push(subMatrix[j])
    }
}

for (let i = 0; i < flatenedMatrix.length - 1; i++) {
    for (let j = 0; j < flatenedMatrix.length - i - 1; j++) {
        // swap
        if (flatenedMatrix[j] > flatenedMatrix[j + 1]) {
            const temp = flatenedMatrix[j]
            flatenedMatrix[j] = flatenedMatrix[j + 1]
            flatenedMatrix[j + 1] = temp
        }
    }
}

let k = 0;
for (let i = 0; i < matrix.length; i++) {
    const subMatrix = matrix[i]

    for (let j = 0; j < subMatrix.length; j++) {
        subMatrix[j] = flatenedMatrix[k]
        k++
    }
}

console.log(matrix)

/**
 * Complexitate: O(n^2) sau in cel mai bun caz O(n*logn)
 */
const matrix = [
    [24, 27, 1, 3],
    [30, 5, 10, 8],
    [31, 11, 16, 15]
]

const rowLength = matrix.length
const columnLength = matrix[0].length
const total = rowLength * columnLength

let r = 0
let c = 0
let nextRow = 0
let nextCol = 0

for (let i = 0; i < total; i++) {    
    // reset row / col
    r = c = 0

    const currentTotal = total - i - 1 // optimizare bubblesort
    for (let j = 0; j < currentTotal; j++) {
        // fetch next
        if (j !== 0) {
            if (j % columnLength === 0) {
                r++
                c = 0
            } else {
                c++
            }
        }

        let current = matrix[r][c]
        let next

        // find next index in the matrix
        // treated as an array
        if (c === columnLength - 1) {
            next = matrix[r + 1][0]
            nextRow = r + 1
            nextCol = 0
        } else {
            next = matrix[r][c + 1]
            nextRow = r
            nextCol = c + 1
        }
        
        // swap
        if (current > next) {
            const tmp = next
            matrix[ nextRow ][ nextCol ] = matrix[r][c]
            matrix[r][c] = tmp
        }
    }
}

console.log(matrix)
