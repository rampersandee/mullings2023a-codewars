// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function returnOpposite(number)
{
    function opposite(number)
    {
      number = number * -1
      return number
    }
}
//OLDER ATTEMPS
  //     if (number < 0)
  //          {
  //             number = number * -1
  //             return number
  //            }
  //        else if ( number > 1)
  //          {
  //            number = number + number * 2
  //            return number
  //          }
  //         else        
  //         {
  //           number = number - 2
  //         }
  // { 
  //     for (let i = number; i <= 1; i++)
  //      {
  //        if (i < 0)
  //          {
  //             i = number - number * 2
  //             return i
  //            }
  //        else if ( i >= 0)
  //          {
  //            i = number + number * 2
  //          }
  //      }
  // }
  // }