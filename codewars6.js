// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) { //calls the parameter 'name' into the function
    let string = name               //gives parameter a variable
    
    if (string.charAt(0) == 'r' || string.charAt(0) == 'R') //asks if first letter of the string is equal to capital or lowercase 'r'
      {
        return name + " plays banjo" //returns the name entered and " plays banjo" if the name begins with the letter 'r'
      }
    else
      {
        return name + " does not play banjo" //returns the name entered and " does not play banjo" if the name does not begin with the letter 'r'
      }
  }
