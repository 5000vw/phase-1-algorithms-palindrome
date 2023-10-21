function isPalindrome(word) {
  // Write your algorithm here

  let reversed = word.split("").reverse().join("")
  if(reversed === word){
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome("hello"))
console.log(isPalindrome("madam"))


/* 
 Function isPalindrome(word):
    1. let reversed variable is set as the reversed version of the "word."
        - Split the "word" into an array of characters.
        - Reverse the array.
        - Join the reversed array back into a string.
    2. If "reversed" is equal to the "word," return true (it's a palindrome).
    3. Otherwise, return false (it's not a palindrome).
*/



/*
  The  function ispalidrome checks if a word is a palidrome, 
  it returns true if it is a palidrome  and return false if not 
  a palidrome
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
