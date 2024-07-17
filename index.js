function isPalindrome(word) {
  // Write your algorithm here
  // Remove non-alphabet characters and convert to lowercase
  word = word.toLowerCase().replace(/[^a-z]/g, "");

  // Check if the word is equal to its reverse
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  Function isPalindrome(word):
    1. Convert the input `word` to lowercase.
    2. Remove any non-alphabet characters from `word`.
    3. Check if the cleaned `word` is equal to its reverse.
    4. Return true if they are equal (i.e., `word` is a palindrome), otherwise return false.

*/

/*
  Add written explanation of your solution here
  The isPalindrome function works as follows:

It first converts the input word to lowercase using toLowerCase().
It removes any non-alphabet characters from word using .replace(/[^a-z]/g, '').
Then, it compares the cleaned word with its reverse. If they are identical (word === word.split('').reverse().join('')), the function returns true, indicating that word is a palindrome. Otherwise, it returns false.

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
