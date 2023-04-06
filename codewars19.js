/*
 * Function to check whether the given number is Even or Odd.
 * @params = integer number
 * @return = returns "Even" if the number is even "Odd" otherwise.
 */

function evenOrOdd(num)
{
    if (num % 2 == 0)
    {
        return 'Even'
    }
    else
    {
        return 'Odd'
    }
}

//AS AN ARROW FUNCTION
const evenOrOdd = (num) => {
    if (num % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }
  
//AGAIN
  const evenOrOdd = (num) => num % 2 === 0 ? 'Even' : 'Odd';