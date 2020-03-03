/**
 * This problem was recently asked by Amazon:
 *
 * Given an integer, reverse the digits. Do not convert the integer into a string and reverse it.
 * 
 * Here's some examples and some starter code.
 *
 * print(reverse_integer(135))
 * 531
 *
 * print(reverse_integer(-321))
 * -123
 */

var integer = -551
var reversedInteger = 0
const isNegative = num => num < 0

while ( integer !== 0 ) {
    reversedInteger = ( reversedInteger * 10 ) + ( integer % 10 )
    integer = parseInt( integer / 10 )
}

if ( isNegative( integer ) ) {
    reversedInteger = -1 * reversedInteger
}

console.log( reversedInteger )
