// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let accumSum;
    let mumble = "";
    console.log(s)
    for (let i = 0; i < s.length; i++) {
      accumSum = s[i].toUpperCase()
      accumSum += s[i].repeat(i).toLowerCase()
      if (i + 1 != s.length) {
        accumSum += "-"
      }
      mumble = mumble.concat(accumSum)
      console.log(accumSum)
    }
    return mumble
  }