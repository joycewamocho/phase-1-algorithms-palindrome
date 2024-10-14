function isPalindrome(word) {
    let reverse = word.split('').reverse().join('')
    return word === reverse; 
}



/* 
  Add your pseudocode here
  reversed word
  if (the reversed word is equal to word
  return true
  else return false
*/

/*
  Add written explanation of your solution here
  create a function called ispalindrone that recives an argument.the function will check if the argument which 
  should be a string is the some word when it is reversed and returns true else it will return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
