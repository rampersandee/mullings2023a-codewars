// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
    let unique;
    for (let i = 0; i < arr.length; i++) {
      // compare the current element with the next element and the previous element
      if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
        unique = arr[i];
        break; // break out of the loop once the unique number is found
      }
    }
    return unique;
  }
  