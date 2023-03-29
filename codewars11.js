// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x)
{
  let total = 0
  if (x.length == 0 || x == null) //checks if 'x' is empty
     {
      return
     }
  for (let i = 0; i < x.length; i++)
    {
      if (typeof x[i] === 'string') //checks if 'x' is a string
      {
        total = total + Number(x[i])
      }
      else
      {
        total = total + x[i]
      }
  }
      return total
}