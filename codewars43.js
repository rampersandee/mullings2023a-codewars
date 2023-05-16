// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

function mostLikely(prob1, prob2) {
    const prob1Arr = prob1.split(":");
    const prob2Arr = prob2.split(":");
    
    const prob1Num = Number(prob1Arr[0]);
    const prob1Den = Number(prob1Arr[1]);
    const prob2Num = Number(prob2Arr[0]);
    const prob2Den = Number(prob2Arr[1]);
    
    return (prob1Num / prob1Den) > (prob2Num / prob2Den);
  }