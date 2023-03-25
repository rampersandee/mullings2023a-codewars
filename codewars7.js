// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [x];
    z.length = n;
    if (x < 0 || n < 0) //checks if numbers are both positive
      {
        return
      }
    else
      {
        for (let i = 1; i < z.length; i++)
          {
            z[i] = z[i-1]+x //starting at the first index, pulling value from previous index, then adding the multiple 'x' to that index in order to count
          }
        return z;
      }
  }