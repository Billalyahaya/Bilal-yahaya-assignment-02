// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 *@param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */


function sumOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
//let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]
  sum= 0

  for (let i= 0;i < arrayOfNumbers.lenght; i++) {
      sum += arrayOfNumbers[i];
  }


  return sum;
  
}

console.log(arrayOfNumbers.lenght)
console.log(sumOfNumbers(arrayOfNumbers))


assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
  //declaring variables for array of numbers and array of even numbers
const Numbers =[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  var evenNumbers = [];

  //logging the array of even numbers to the for reading 
  //console.log(array of numbers)

  //using the for.each function and modulus operation to filter even numbers and pushing into the evenNumbers variable
  Numbers.forEach(number=>{
    if(number % 2===0) {
      evenNumbers.push(number);
      
    }
  });
//logging the array of even numbers back to the console for reading
  console.log(evenNumbers.lenght)
  // console.log(evenNumbers.lenght)
  return evenNumbers.lenght;
  }
countEvenNumbers()
 assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

