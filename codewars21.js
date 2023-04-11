// In this kata you will create a function 
// that takes a list of non-negative integers 
// and strings and returns a new list 
// with the strings filtered out.

function filter_list(l) {
  let newArray = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      newArray.push(l[i]);
    }
  }
  return newArray;
}

//SHORTHAND
// function filter_list(l) {
//   return l.filter(a => typeof a === 'number')
//   }