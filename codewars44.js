// DESCRIPTION:
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

function alternate(n, firstValue, secondValue) {
    let arr = []
      if (n == 0)
      {
        return arr
      }
    if (n == 1) {
      return [firstValue];
    }
      if (n != 0) {
        arr = [firstValue, secondValue]
        for (let i = 1; i < n - 1; i++) {
        if (arr[i] == secondValue) {
              arr.push(firstValue)
            }
        else if (arr[i] == firstValue) {
              arr.push(secondValue)
            }
        }
        return arr
      }
  // OLDER ATTEMPTS

  //   if (n != 0)
  //     {
  //       let arr = [firstValue,secondValue]
  //       console.log(arr)
  //       for (let i = 0; i < n; i++)
  //         {
  //           if (arr[i] == firstValue)
  //             {
  //               arr.push(firstValue)
  //             }
  //           else if (arr[i] == secondValue)
  //             {
  //               arr.push(secondValue)
  //             }
  //         }
  //       return arr
  //     }
  //   for (let i = 0; i < n; i++) {
  //     if (arr == []) {
  //       arr.push(firstValue)
  //     }
  //     else if (arr[i] == firstValue) {
  //       arr.push(secondValue)
  //     }
  //     else if (arr[i] == secondValue) {
  //       arr.push(firstValue)
  //     }
  //   }
  //   for (let i = 0; i < n; i++)
  //     if (!arr.includes(firstValue)) {
  //       arr.push(firstValue)
  //     }
  //     else if (!arr[i] == arr[i+1]) {
  //       arr.push(secondValue)
  //     }
  }