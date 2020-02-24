/*
Se da o matrice
Sa se sorteze crescator, ai fiecare element de pe prima linie
sa fie mai mare decat cel de pe linia precedenta,
luam in considerare ca matricea va fi de N x M 

matrix: 
1 3 5 8
10 11 15 16
24 27 30 31
*/

/* 
Compexity: 3 * O(n) / 2 * O*(n) cu Array.flat()
*/
// const matrix = [
//     [24, 27, 1, 3],
//     [30, 5, 10, 8],
//     [31, 11, 16, 15]
// ]

// const flatenedMatrix = []; // flatenedMatrix = matrix.flat()
// for (let i = 0; i < matrix.length; i++) {
//     const subMatrix = matrix[i]
    
//     for (let j = 0; j < subMatrix.length; j++) {
//         flatenedMatrix.push(subMatrix[j])
//     }
// }

// for (let i = 0; i < flatenedMatrix.length - 1; i++) {
//     for (let j = 0; j < flatenedMatrix.length - i - 1; j++) {
//         if (flatenedMatrix[j] > flatenedMatrix[j + 1]) {
//             // swap
//             const temp = flatenedMatrix[j]
//             flatenedMatrix[j] = flatenedMatrix[j + 1]
//             flatenedMatrix[j + 1] = temp
//         }
//     }
// }

// let k = 0;
// for (let i = 0; i < matrix.length; i++) {
//     const subMatrix = matrix[i]
    
//     for (let j = 0; j < subMatrix.length; j++) {
//         subMatrix[j] = flatenedMatrix[k]
//         k++
//     }
// }

/*
Complexity : 
*/
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
let nextData = {
    r: 0,
    c: 0
}

for (let i = 0; i < total; i++) {    
    r = 0
    c = 0

    for (let j = 0; j < total - i - 1; j++) {
        if (r === rowLength) {
            break
        }

        let current = matrix[r][c]
        let next 

        if (c === columnLength - 1) {
            next = matrix[r + 1][0]
            nextData.r = r + 1
            nextData.c = 0
        } else {
            next = matrix[r][c + 1]
            nextData.r = r
            nextData.c = c + 1
        }

        // if (current > next) {
        //     const tmp = matrix[ nextData.r ][ nextData.c ]
        //     matrix[ nextData.r ][ nextData.c ] = matrix[r][c]
        //     matrix[r][c] = tmp
        // }

        // next
        if (j % (columnLength - 1) === 0 && j !== 0) {
            r++
            c = 0
        } else {
            c++
        }

        // debugger
        console.log(i, j, current, next)
    }
}