// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!


function squareDigits(num){
    let numArray = num.toString().split("").map(Number) // turning num into a string and then an array
    let digitsSquared = "" // the string where squared digits
  //   console.log(numArray)
    for (let i = 0; i < numArray.length; i++) // looping thru the array
      {
        let square = numArray[i] * numArray[i] // this is squaring formula for each of the items in an array
        digitsSquared += square // adding numbers to the string
      }
  //   console.log(digitsSquared)
    return +digitsSquared // returing the string as a number with '+'
  }

  //SHORTHAND
  function squareDigits(num) {
    return [...num.toString()] // returning a string as an array using spread method
      .map(digit => digit ** 2) // map turns the array into numbers
      .join('') // this brings them back together
  }

  //SHORTHAND
function squareDigits(num) {
    const digits = Array.from(String(num), Number) // sets a variable equal to an array from the 'num' variable converted to a string
    const digitsSquared = digits.map(digit => digit ** 2).join('') // sets a variable equal a map of the converted digits, squaring it using '**'
    return Number(digitsSquared) // returns the concatenated string as a number
    }