// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let myArray = [0,0] //creating a variable for the array
    
    if (input == 0 || input == [] || input == null)
          {
            return []
          }
    for (let i in input) //for..in, iterates through the array
      {
      if (input[i] > 0)
      {
        myArray[0]++ //accessing the first index of the array and then adding 1 to the count; alt myArray[0] = myArray[0] + 1
      }
      else if (input[i] < 0)
      {
        myArray[1] = myArray[1] + input[i] //accessing the second index of the array and then adding that value 
      }
    }
    console.log(myArray)
    return myArray
  }
  
  function countPositivesSumNegatives(input) {
    // let myArray = [1, 2, 3, 4, 5]; for(let i in myArray) { console.log(myArray[i]); }
    //   let myArray = [0,0] //creating a variable for the array
      let posNum = 0
      let negNum = 0
      
      if (input == 0 || input == [] || input == null)
          {
            negNum = negNum + 0
            posNum = posNum + 0
            return []
          }
      for (let i in input) //for..in, iterates through the array ('i' is not the element, 'i' is the index number of the current element)
        {
        if (input[i] < 0)
        {
          console.log(input[i])
          negNum = negNum + input[i] //accessing the second index of the array and then adding that value
        }
        else if (input[i] > 0)
        {
          console.log(input[i])
          posNum++ //accessing the first index of the array and then adding 1 to the count; alt myArray[0] = myArray[0] + 1 
        }
      }
      console.log(posNum, negNum)
      return [posNum,negNum]
    }