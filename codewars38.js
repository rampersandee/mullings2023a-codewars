// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  console.log(str)
  // p - 'str', a string input into the function
  // r - return the number of vowels in a given string
  // e - 'string', number of vowels: 1
  // p - 'count' variables to count the number of vowels in any given string
  let vowelCount = 0
  for (let i = 0; i < str.length; i++)
    {
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
          vowelCount++
        }
    }
  return vowelCount
}