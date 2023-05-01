// OLD ATTEMPT
// function validParentheses(parenStr) {
//   // checks if the strings are touching
//   let valid = "()"
//   let parenArray = parenStr.split("")
//   console.log(parenArray)
//   if (parenArray.includes(valid))
//   {
//     return true;
//   }
//   else if (parenArray == '')
//     {
//       return true;
//     }
//   else
//   {
//     return false;
//   }
// }

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

function validParentheses(parenStr) {
  const stack = [];
  for (let i = 0; i < parenStr.length; i++) {
    const char = parenStr.charAt(i);
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}