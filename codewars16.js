// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let average = 0;
    let arraySum = 0;
  
    if (array.length === 0) {
      return 0;
    }
  
    for (let i = 0; i < array.length; i++) {
      arraySum += array[i];
    }
  
    average = arraySum / array.length;
    return average;
  }
  
  //older attempt
  // function findAverage(array) 
  // {
  //   let average = 0
  //   let arraySum = 0
  //   for (let i = 0; i < array.length; i++)
  //     {
  //       if (array.length !== 0)
  //         {
  //           arraySum = arraySum + array[i]
  //           average = arraySum/array.Length
  //           console.log(average)
  //         }
  //        else
  //          {
  //            return 0
  //          }
  //       return average
  //     }
  // }