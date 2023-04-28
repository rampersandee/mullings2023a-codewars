// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    for (let i = 0; i < str.length; i++)
      {
       if ('aeiouAEIOU'.includes(str[i]))
         {
           count++
         }
      }
    return count;
  }

  const getCount = str => str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
